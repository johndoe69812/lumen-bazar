import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'ad_params_options' })
export class ParamOptions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'date_created' })
  dateCreated: Date;

  @OneToMany(() => ParamOptionItem, (optionItem) => optionItem.options)
  items: ParamOptionItem[];
}

@Entity({ name: 'ad_params_option_item' })
export class ParamOptionItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column({ name: 'option_id' })
  optionId: number;

  @Column({ name: 'date_created' })
  dateCreated: Date;

  @ManyToOne(() => ParamOptions, (paramOptions) => paramOptions.items)
  @JoinColumn({
    name: 'option_id',
    referencedColumnName: 'id',
  })
  options: ParamOptions;
}
