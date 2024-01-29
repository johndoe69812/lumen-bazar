import { Controller, Get, Logger, Param } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Country } from './entities/country.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import CityListResponse from './schemas/city-list.response';

@ApiTags('locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<Country> {
    const result = await this.locationsService.findOne(code);

    return result;
  }

  @Get('find-city/:queryString')
  @ApiResponse({
    status: 200,
    description: 'The list of all satisfied locations',
    type: CityListResponse,
  })
  async findCity(
    @Param('queryString') cityName: string,
  ): Promise<CityListResponse[]> {
    const result = await this.locationsService.findCities(cityName);

    Logger.verbose('Request started: /find-city');

    return result.map((city) => {
      const { country, country_code, ...rest } = city;

      return {
        country: {
          code: country_code,
          name: country.name,
        },
        ...rest,
      };
    });
  }
}
