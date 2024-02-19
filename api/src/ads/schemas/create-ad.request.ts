import { Length, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdRequest {
  @Length(10, 200, {
    message: 'Title should have length of 10 to 200 chars',
  })
  @IsString()
  @ApiProperty({ minimum: 10, maximum: 200 })
  title: string;
}
