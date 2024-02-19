import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsService } from './ads.service';
import { AdCategory } from './entities/category.entity';
import { Advertisement } from './entities/advertisement.entity';
import { AdsController } from './ads.controller';
import { AdsCategoriesService } from './categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdCategory, Advertisement])],
  providers: [AdsService, AdsCategoriesService],
  controllers: [AdsController],
})
export class AdsModule {}
