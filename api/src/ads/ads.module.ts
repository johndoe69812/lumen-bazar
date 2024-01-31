import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsService } from './ads.service';
import { AdCategory } from './entities/category.entity';
import { AdsController } from './ads.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdCategory])],
  providers: [AdsService],
  controllers: [AdsController],
})
export class AdsModule {}
