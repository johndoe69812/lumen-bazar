import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { Country } from './entities/country.entity';
import { City } from './entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country, City])],
  providers: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}
