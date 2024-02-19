import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetCategoriesRequest {
  @IsBoolean()
  @ApiProperty()
  onlyGeneral: boolean;
}
