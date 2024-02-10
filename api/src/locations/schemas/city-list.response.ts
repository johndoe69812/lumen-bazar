import { ApiProperty } from '@nestjs/swagger';

class Country {
  @ApiProperty()
  code: string;
  @ApiProperty()
  name: string;
}

class ListOfCountriesResponse {
  @ApiProperty({ example: 11 })
  id: number;

  @ApiProperty({ example: 'New York' })
  name: string;

  @ApiProperty({ type: Country })
  country: Country;
}

export default ListOfCountriesResponse;
