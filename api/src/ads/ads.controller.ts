import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdsService } from './ads.service';
import { CreateAdRequest } from './schemas/create-ad.request';
import { AdsCategoriesService } from './categories.service';
import { AdCategorySchema } from './schemas/ad-category.schema';

@ApiTags('ads')
@Controller('ads')
export class AdsController {
  constructor(
    private readonly adsService: AdsService,
    private readonly categoriesService: AdsCategoriesService,
  ) {}

  @Get('/')
  getAdvertisements() {
    return this.adsService.getAdvertisements();
  }

  @Get('/categories/all')
  @ApiOkResponse({
    description: 'The list of all categories',
    isArray: true,
    type: AdCategorySchema,
  })
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Get('/categories/general')
  @ApiOkResponse({
    description: 'The list of general categories',
    isArray: true,
    type: AdCategorySchema,
  })
  getGeneralCategories() {
    return this.categoriesService.getAllCategories(true);
  }

  @Get('/categories/flat')
  @ApiOkResponse({
    description: 'The list of flat all categories',
    isArray: true,
    type: AdCategorySchema,
  })
  getFlatCategories() {
    return this.categoriesService.getAllCategories(false, true);
  }

  @Post('/create')
  async createAdvertisement(@Body() createAdRequest: CreateAdRequest) {
    return await this.adsService.createAdvertisement(createAdRequest);
  }
}
