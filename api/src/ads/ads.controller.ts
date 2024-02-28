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
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AdsService } from './ads.service';
import { CreateAdRequest } from './schemas/create-ad.request';
import { AdsCategoriesService } from './categories.service';
import { AdCategorySchema } from './schemas/ad-category.schema';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto.';
import { AdParamsService } from './ad-params.service';
import { CreateAdParamDTO } from './dto/create-ad-param.dto';
import { AdParamSchema } from './schemas/ad-param.schema';
import { UpdateAdParamDTO } from './dto/update-ad-param.dto';

@ApiTags('ads')
@Controller('ads')
export class AdsController {
  constructor(
    private readonly adsService: AdsService,
    private readonly adParamsService: AdParamsService,
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

  @Patch('/category/:categoryId')
  @ApiOkResponse({
    description: 'Update ad category',
    isArray: true,
    type: AdCategorySchema,
  })
  async updateCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Body() updateCategoryDTO: UpdateCategoryDTO,
  ) {
    return this.categoriesService.updateCategory(categoryId, updateCategoryDTO);
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
    return this.adsService.createAdvertisement(createAdRequest);
  }

  @Post('/ad-param')
  @ApiOkResponse({
    description: 'Create ad parameter',
  })
  async createParam(@Body() createParamDTO: CreateAdParamDTO) {
    return this.adParamsService.createParam(createParamDTO);
  }

  @Get('/ad-params')
  @ApiOkResponse({
    description: 'Get all ad parameters',
    isArray: true,
    type: AdParamSchema,
  })
  async getAllParameters() {
    return this.adParamsService.getAllParams();
  }

  @Patch('/ad-params/:paramId')
  @ApiOkResponse({
    description: 'Update ad parameters',
    isArray: true,
    type: AdParamSchema,
  })
  async updateAdParameter(
    @Param('paramId', ParseIntPipe) paramId: number,
    @Body() updateAdParamDTO: UpdateAdParamDTO,
  ) {
    return this.adParamsService.updateParameter(paramId, updateAdParamDTO);
  }

  @Delete('/ad-params/:paramId')
  @ApiParam({
    name: 'paramId',
    required: true,
    schema: { type: 'integer' },
  })
  @ApiOkResponse({
    description: 'Delete ad parameters',
    type: Boolean,
  })
  async deleteAdParameter(@Param('paramId', ParseIntPipe) paramId) {
    return this.adParamsService.deleteParam(paramId);
  }
}
