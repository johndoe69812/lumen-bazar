import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsService } from './ads.service';
import { AdCategory } from './entities/category.entity';
import { Advertisement } from './entities/advertisement.entity';
import { AdsController } from './ads.controller';
import { AdsCategoriesService } from './categories.service';
import { AdParam } from './entities/ad-parameter.entity';
import { AdParamsService } from './ad-params.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdCategory, Advertisement, AdParam])],
  providers: [AdsService, AdsCategoriesService, AdParamsService],
  controllers: [AdsController],
})
export class AdsModule {}
