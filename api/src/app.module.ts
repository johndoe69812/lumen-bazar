import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsModule } from './locations/locations.module';
import { AdsModule } from './ads/ads.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'root',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      // synchronize: true,
    }),
    LocationsModule,
    AdsModule,
  ],
})
export class AppModule {}
