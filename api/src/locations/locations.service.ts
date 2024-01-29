import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { City } from './entities/city.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  async findOne(countryCode: string): Promise<Country | null> {
    return await this.countriesRepository.findOneBy({
      iso2: countryCode.toUpperCase(),
    });
  }

  async findCities(searchString: string): Promise<City[] | null> {
    const cities = await this.citiesRepository.find({
      relations: ['country'],
      where: {
        name: ILike(`%${searchString}%`),
      },
      take: 10,
    });

    return cities;
  }

  async remove(id: number): Promise<void> {
    await this.countriesRepository.delete(id);
  }
}
