import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Tree,
} from 'typeorm';
import { AdCategoryModel } from '../interfaces/ad-category.model';

@Entity({ name: 'ad_categories' })
@Tree('adjacency-list')
export class AdCategory implements AdCategoryModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  alias: string;

  @Column({ name: 'parent_id' })
  parentId: number;

  @Column({
    name: 'image_url',
  })
  imageUrl: number;

  @Column({ name: 'date_created' })
  dateCreated: Date;

  @Column({ name: 'date_updated' })
  dateUpdated: Date;

  @ManyToOne(() => AdCategory, (category) => category.subCategories)
  @JoinColumn({
    name: 'parent_id',
    referencedColumnName: 'id',
  })
  parent: AdCategory;

  @OneToMany(() => AdCategory, (category) => category.parent)
  subCategories: AdCategory[];
}
