import { ApiProperty } from '@nestjs/swagger';

export class AdCategorySchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  alias: string;

  @ApiProperty()
  parentId: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  dateCreated: Date;

  @ApiProperty()
  dateUpdated: Date;

  @ApiProperty({ type: AdCategorySchema, isArray: true })
  subCategories?: AdCategorySchema[];
}
