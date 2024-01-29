import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { City } from './city.entity';

@Entity({ name: 'countries' })
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  iso2: string | null;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
