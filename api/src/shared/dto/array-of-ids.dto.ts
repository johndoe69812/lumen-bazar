import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsNumber } from 'class-validator';

export class ArrayOfIdsDTO {
  @IsNumber({}, { each: true })
  @ArrayMaxSize(100, { message: 'Limit of 100 records exceeded' })
  @ApiProperty({ isArray: true, type: Number })
  ids: number[];
}
