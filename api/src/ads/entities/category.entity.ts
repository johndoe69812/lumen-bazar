import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ad_categories' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country_code: string;
}
