import { Length, IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDTO {
  @Length(3, 50, {
    message: 'Title should have length of 3 to 50 chars',
  })
  @IsString()
  @ApiProperty({ minimum: 3, maximum: 50 })
  title: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false, nullable: true })
  parentId: number;
}
