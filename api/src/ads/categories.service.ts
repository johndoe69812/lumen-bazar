import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { AdCategory } from './entities/category.entity';
import buildCategoryTree from './utils/build-category-tree';
import { generateAdSlug } from './utils/generate-ad-slug';

@Injectable()
export class AdsCategoriesService {
  constructor(
    @InjectRepository(AdCategory)
    private categoriesRepository: Repository<AdCategory>,
  ) {}

  async createCategory(candidate: Partial<AdCategory>) {
    const cat = new AdCategory();
    cat.title = candidate.title;

    if (candidate.parentId) {
      cat.parentId = candidate.parentId;
    }

    const saved = await this.categoriesRepository.save(cat);
    saved.alias = generateAdSlug(cat.title, saved.id);
    this.categoriesRepository.save(saved);

    return saved.id;
  }

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

  async updateCategory(
    categoryId: number,
    updates: Partial<AdCategory>,
  ): Promise<AdCategory> {
    if (!categoryId) {
      throw Error('categoryId not found');
    }

    const category = await this.categoriesRepository.findOne({
      where: { id: categoryId },
    });
    this.categoriesRepository.save({ ...category, ...updates });

    return category;
  }

  async deleteCategory(id: number): Promise<boolean> {
    try {
      await this.categoriesRepository.delete({ id });
      return true;
    } catch (err) {
      throw Error("Can't remove category");
    }
  }
}
