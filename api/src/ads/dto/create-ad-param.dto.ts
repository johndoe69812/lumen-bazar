import { Length, IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdParamDTO {
  @Length(3, 50, {
    message: 'Name should have length of 3 to 50 chars',
  })
  @IsString()
  @ApiProperty({ minimum: 3, maximum: 50 })
  name: string;

  @ApiProperty({
    description: 'Data type (one of: number, string or options)',
  })
  dataType: 'number' | 'options' | 'string';

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Id of option (Number)',
    required: false,
    type: Number,
  })
  optionId?: number;

  @IsNumber()
  @ApiProperty({
    description: 'Id of category (Number)',
    type: Number,
  })
  categoryId: number;

  @ApiProperty({
    description: 'Meta information(constraints) for parameter',
    type: Object,
  })
  meta?: Record<string, unknown>;
}
