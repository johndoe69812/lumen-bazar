import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ad_items' })
export class Advertisement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  alias: string;

  @Column({ name: 'category_id' })
  categoryId: string;

  @Column({ name: 'date_created' })
  dateCreated: string;

  @Column({ name: 'date_updated' })
  dateUpdated: string;
}
