import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdsService } from './ads.service';
import { CreateAdRequest } from './schemas/create-ad.request';
import { AdsCategoriesService } from './categories.service';
import { AdCategorySchema } from './schemas/ad-category.schema';
import { CreateCategoryDTO } from './dto/create-category.dto';

@ApiTags('ads')
@Controller('ads')
export class AdsController {
  constructor(
    private readonly adsService: AdsService,
    private readonly categoriesService: AdsCategoriesService,
  ) {}

  @Get('/')
  async getAdvertisements() {
    return this.adsService.getAdvertisements();
  }

  @Post('/category')
  @ApiOkResponse({
    description: 'Create ad category',
    type: AdCategorySchema,
  })
  async createCategory(@Body() createCategoryDto: CreateCategoryDTO) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get('/categories/all')
  @ApiOkResponse({
    description: 'The list of all categories',
    isArray: true,
    type: AdCategorySchema,
  })
  async getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Get('/categories/general')
  @ApiOkResponse({
    description: 'The list of general categories',
    isArray: true,
    type: AdCategorySchema,
  })
  async getGeneralCategories() {
    return this.categoriesService.getAllCategories(true);
  }

  @Get('/categories/flat')
  @ApiOkResponse({
    description: 'The list of flat all categories',
    isArray: true,
    type: AdCategorySchema,
  })
  async getFlatCategories() {
    return this.categoriesService.getAllCategories(false, true);
  }

  @Patch('/category')
  @ApiOkResponse({
    description: 'Update ad category',
    isArray: true,
    type: AdCategorySchema,
  })
  async updateCategory(@Body() createCategoryDto: CreateCategoryDTO) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Delete('/category/:categoryId')
  @ApiOkResponse({
    description: 'Delete ad category',
  })
  async deleteCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesService.deleteCategory(categoryId);
  }

  @Post('/create')
  async createAdvertisement(@Body() createAdRequest: CreateAdRequest) {
    return await this.adsService.createAdvertisement(createAdRequest);
  }
}
