import { Length, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdParamDTO {
  @Length(3, 50, {
    message: 'Name should have length of 3 to 50 chars',
  })
  @IsString()
  @IsOptional()
  @ApiProperty({ minimum: 3, maximum: 50 })
  name: string;

  @IsOptional()
  @ApiProperty({})
  categoryId: number;
}
