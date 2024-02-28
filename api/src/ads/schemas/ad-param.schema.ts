import { ApiProperty } from '@nestjs/swagger';
import { AdCategorySchema } from './ad-category.schema';

export class AdParamSchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  dataType: string;

  @ApiProperty()
  dateCreated: Date;

  @ApiProperty({
    isArray: true,
    type: AdCategorySchema,
  })
  category?: AdCategorySchema[];
}
