import { Controller, Get, Param } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Country } from './entities/country.entity';
import { City } from './entities/city.entity';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<Country> {
    const result = await this.locationsService.findOne(code);

    return result;
  }

  @Get('find-city/:q')
  async findCity(@Param('q') cityName: string): Promise<City[]> {
    const result = await this.locationsService.findCity(cityName);

    return result;
  }
}
