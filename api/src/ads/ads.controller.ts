import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdCategory } from './entities/category.entity';
import { AdsService } from './ads.service';

@ApiTags('Ads')
@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Get('category/:alias')
  @ApiResponse({
    status: 200,
    description: 'Found ads category',
    // type: AdCategory[],
  })
  async findOne(@Param('alias') alias: string): Promise<AdCategory[]> {
    const result = await this.adsService.findCategory(alias);

    return result;
  }

  @Get('categories/all')
  async getAll(): Promise<AdCategory[]> {
    const result = await this.adsService.getAllCategories();

    return result;
  }
}
