import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CityModel } from '../interfaces/city.model';
import { Country } from './country.entity';

@Entity({ name: 'cities' })
export class City implements Partial<CityModel> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country_code: string;

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({
    name: 'country_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'custom',
  })
  country: Country;
}
