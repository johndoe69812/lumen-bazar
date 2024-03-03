import { ApiProperty } from '@nestjs/swagger';

export class ParamOptionVariantSchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  value: string;
}

export class ParamOptionSchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  dateCreated: Date;

  @ApiProperty({
    isArray: true,
    type: ParamOptionVariantSchema,
  })
  items?: ParamOptionVariantSchema[];
}
