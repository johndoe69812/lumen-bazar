import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { AdCategory } from './category.entity';

@Entity({ name: 'ad_params' })
export class AdParam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'data_type' })
  dataType: string;

  @Column({ name: 'meta' })
  meta: string;

  @Column({ name: 'option_id' })
  optionId?: number;

  @ManyToMany(() => AdCategory)
  @JoinTable({
    name: 'ad_params_to_category',
    joinColumn: {
      name: 'param_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  category: AdCategory[];

  @Column({ name: 'date_created' })
  dateCreated: Date;
}
