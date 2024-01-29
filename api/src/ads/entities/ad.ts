import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ads' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country_code: string;
}
