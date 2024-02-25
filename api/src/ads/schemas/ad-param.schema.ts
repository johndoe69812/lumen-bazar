import { ApiProperty } from '@nestjs/swagger';

export class AdParamSchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  dataType: string;

  @ApiProperty()
  dateCreated: Date;
}
