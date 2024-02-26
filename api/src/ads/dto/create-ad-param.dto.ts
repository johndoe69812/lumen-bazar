import { Length, IsString, IsNumber, ArrayMaxSize } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdParamDTO {
  @Length(3, 50, {
    message: 'Name should have length of 3 to 50 chars',
  })
  @IsString()
  @ApiProperty({ minimum: 3, maximum: 50 })
  name: string;

  @IsNumber({}, { each: true })
  @ArrayMaxSize(10)
  @ApiProperty({
    description: 'List of categories (ids)',
    type: Number,
    isArray: true,
  })
  categories: number[];
}
