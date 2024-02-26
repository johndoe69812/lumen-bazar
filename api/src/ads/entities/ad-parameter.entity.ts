import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { AdCategory } from './category.entity';

// @Entity({ name: 'ad_params_to_category' })
// class AdParamsToCategories {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ name: 'category_id' })
//   categoryId: number;

//   @Column({ name: 'visible_in_filters' })
//   visibleInFilters: boolean;

//   @OneToOne(() => AdCategory)
//   @JoinColumn({
//     name: 'category_id',
//     referencedColumnName: 'id',
//   })
//   category: AdCategory;

//   @OneToOne(() => AdParam)
//   @JoinColumn({
//     name: 'param_id',
//     referencedColumnName: 'id',
//   })
//   param: AdParam;
// }

@Entity({ name: 'ad_params' })
export class AdParam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'data_type' })
  dataType: string;

  @Column({ name: 'date_created' })
  dateCreated: Date;

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
}
