import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ad_params' })
export class AdParam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'data_type' })
  dataType: string;

  @Column({ name: 'date_created' })
  dateCreated: string;
}
