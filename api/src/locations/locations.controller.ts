import { Controller, Get, Param } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Country } from './entities/country.entity';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiOkResponse({
    description: 'The list of all locations',
    isArray: true,
    type: CityListResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
  })
  async findCity(@Param('queryString') cityName: string) {
    const result = await this.locationsService.findCities(cityName);

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
