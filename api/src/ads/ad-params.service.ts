import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { AdParam } from './entities/ad-parameter.entity';
import { CreateAdParamDTO } from './dto/create-ad-param.dto';
import { AdCategory } from './entities/category.entity';
import { ParamOptionItem, ParamOptions } from './entities/param-options.entity';
import { ParamOptionSchema } from './schemas/param-option.schema';
import { ArrayOfIdsDTO } from 'src/shared/dto/array-of-ids.dto';

@Injectable()
export class AdParamsService {
  constructor(
    @InjectRepository(AdParam)
    private adParamsRepository: Repository<AdParam>,
    @InjectRepository(AdCategory)
    private adCategories: Repository<AdCategory>,
    @InjectRepository(ParamOptions)
    private optionsRepository: Repository<ParamOptions>,
    @InjectRepository(ParamOptionItem)
    private optionItemRepository: Repository<ParamOptionItem>,
  ) {}

  async createParam(paramData: CreateAdParamDTO) {
    const param = new AdParam();
    param.name = paramData.name;
    param.dataType = paramData.dataType;
    param.meta = JSON.stringify(paramData.meta);
    param.optionId = paramData.optionId;

    if (paramData.categoryId) {
      const category = await this.adCategories.findBy({
        id: paramData.categoryId,
      });

      param.category = category;
    }

    const saved = await this.adParamsRepository.save(param);
    return saved.id;
  }

  async getAllParams() {
    return this.adParamsRepository.find({ relations: ['category'] });
  }

  async updateParameter(paramId: number, updates: CreateAdParamDTO) {
    const param = await this.adParamsRepository.findOne({
      where: { id: paramId },
    });

    if (updates.categoryId) {
      const category = await this.adCategories.findOne({
        where: { id: updates.categoryId },
      });

      param.category = [category];
      param.dataType = updates.dataType;
      param.meta = JSON.stringify(updates.meta);
    }

    await this.adParamsRepository.save({ ...param });

    return param;
  }

  async deleteParam(id: number) {
    try {
      const param = await this.adParamsRepository.findOne({ where: { id } });
      await this.adParamsRepository.remove(param);

      return true;
    } catch (err) {
      Logger.error(err);

      return false;
    }
  }

  async createOption(data: Partial<ParamOptionSchema>) {
    const option = new ParamOptions();
    option.name = data.name;

    const { id: optionId } = await this.optionsRepository.save(option);

    if (data.items) {
      const itemsEntities = data.items.map(({ name, value }) => {
        return { name, value, optionId };
      });
      const optionItems = this.optionItemRepository.create(itemsEntities);
      this.optionItemRepository.insert(optionItems);
    }

    return this.optionsRepository.save(option);
  }

  async getAllOptions() {
    return this.optionsRepository.find({ relations: ['items'] });
  }

  async addOptionItem(
    optionId: number,
    newOptionItem: Partial<ParamOptionItem>,
  ) {
    const options = await this.optionsRepository.findOne({
      where: { id: optionId },
    });

    if (!options) {
      Logger.warn('Option not found');
      return;
    }

    const optionItem = new ParamOptionItem();
    optionItem.name = newOptionItem.name;
    optionItem.optionId = options.id;
    optionItem.value = newOptionItem.value;
    this.optionItemRepository.save(optionItem);
  }

  async deleteOptions({ ids }: ArrayOfIdsDTO) {
    try {
      const foundOptions = await this.optionsRepository.find({
        where: { id: In(ids) },
        relations: ['items'],
      });

      const variantIds = foundOptions.reduce<number[]>((acc, { items }) => {
        (items ?? []).forEach(({ id }) => acc.push(id));

        return acc;
      }, []);

      await this.optionItemRepository.delete({ id: In(variantIds) });
      await this.optionsRepository.delete({ id: In(ids) });
      return true;
    } catch (e) {
      Logger.error(e);
      return false;
    }
  }
}
