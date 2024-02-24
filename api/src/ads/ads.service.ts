import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdCategory } from './entities/category.entity';
import { IAdsService } from './interfaces/ads.service.interface';
import { Advertisement } from './entities/advertisement.entity';
import { AdItemModel } from './interfaces/ad-item.model';
import { generateAdSlug } from './utils/generate-ad-slug';

@Injectable()
export class AdsService implements IAdsService {
  constructor(
    @InjectRepository(AdCategory)
    private categoriesRepository: Repository<AdCategory>,
    @InjectRepository(Advertisement)
    private advertisementsRepository: Repository<Advertisement>,
  ) {}

  async createAdvertisement(adItem: Partial<AdItemModel>) {
    const ad = new Advertisement();
    ad.title = adItem.title;

    const saved = await this.advertisementsRepository.save(ad);
    saved.alias = generateAdSlug(ad.title, saved.id);
    this.advertisementsRepository.save(saved);

    return saved.id;
  }

  async archiveAdvertisement() {}

  async updateAdvertisement() {}

  async getAdvertisements() {
    return this.advertisementsRepository.find();
  }

  async getFullAdvertisement() {}

  async getAdvertisementDetails() {}
}
