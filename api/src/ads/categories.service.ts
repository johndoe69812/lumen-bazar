import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { AdCategory } from './entities/category.entity';
import buildCategoryTree from './utils/build-category-tree';

@Injectable()
export class AdsCategoriesService {
  constructor(
    @InjectRepository(AdCategory)
    private categoriesRepository: Repository<AdCategory>,
  ) {}

  async getAllCategories(onlyGeneral: boolean = false, flat: boolean = false) {
    if (onlyGeneral) {
      return await this.categoriesRepository.find({
        where: { parentId: IsNull() },
      });
    }

    if (flat) {
      return await this.categoriesRepository.find();
    }

    const categories = await this.categoriesRepository.find();
    return buildCategoryTree(categories);
  }
}
