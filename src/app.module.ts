import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { HotelBrandsModule } from './hotel-brands/hotel-brands.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HotelModule,
    HotelBrandsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
