import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { AdParam } from './entities/ad-parameter.entity';
import { CreateAdParamDTO } from './dto/create-ad-param.dto';
import { isArray } from 'lodash';
import { AdCategory } from './entities/category.entity';

@Injectable()
export class AdParamsService {
  constructor(
    @InjectRepository(AdParam)
    private adParamsRepository: Repository<AdParam>,
    @InjectRepository(AdCategory)
    private adCategories: Repository<AdCategory>,
  ) {}

  async createParam(paramData: CreateAdParamDTO) {
    const param = new AdParam();
    param.name = paramData.name;

    if (isArray(paramData.categories)) {
      const category = await this.adCategories.findBy({
        id: In(paramData.categories),
      });

      param.category = category;
    }

    const saved = await this.adParamsRepository.save(param);
    return saved.id;
  }

  async getAllParams() {
    return this.adParamsRepository.find({ relations: ['category'] });
  }

  async updateParameter(paramId: number, updates: Partial<AdParam>) {
    if (!paramId) {
      throw Error('paramId not found');
    }

    const param = await this.adParamsRepository.findOne({
      where: { id: paramId },
    });
    this.adParamsRepository.save({ ...param, ...updates });

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
}
