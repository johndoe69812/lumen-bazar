import { ApiProperty } from '@nestjs/swagger';

class CityListResponse {
  @ApiProperty({ example: 11 })
  id: number;
  @ApiProperty({ example: 'New York' })
  name: string;
  @ApiProperty({
    example: {
      code: 'US',
      name: 'United States',
    },
  })
  country: {
    code: string;
    name: string;
  };
}

export default CityListResponse;
