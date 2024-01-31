import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdCategory } from './entities/category.entity';
import buildCategoryTree from './utils/build-category-tree';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(AdCategory)
    private categoriesRepository: Repository<AdCategory>,
  ) {}

  async findCategory(alias: string): Promise<AdCategory[] | null> {
    const categories = await this.categoriesRepository.find({
      relations: ['subCategories'],
      where: {
        alias,
      },
      take: 10,
    });

    return categories;
  }

  async getAllCategories(): Promise<AdCategory[] | null> {
    const categories = await this.categoriesRepository.find();

    return buildCategoryTree(categories);
  }
}
