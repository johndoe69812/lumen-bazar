import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdsService } from './ads.service';
import { CreateAdRequest } from './schemas/createAd.request';

@ApiTags('ads')
@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Get('/')
  getAdvertisements() {
    return this.adsService.getAdvertisements();
  }

  @Post('/create')
  async createAdvertisement(@Body() createAdRequest: CreateAdRequest) {
    return await this.adsService.createAdvertisement(createAdRequest);
  }
}
