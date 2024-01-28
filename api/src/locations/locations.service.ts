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

  async findCity(searchString: string): Promise<City[] | null> {
    const cities = await this.citiesRepository.findBy({
      name: ILike(`%${searchString}%`),
    });
    return cities;
  }

  async remove(id: number): Promise<void> {
    await this.countriesRepository.delete(id);
  }
}
