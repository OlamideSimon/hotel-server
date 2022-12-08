import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { HotelBrandsModule } from './hotel-brands/hotel-brands.module';

@Module({
  imports: [HotelModule, HotelBrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
