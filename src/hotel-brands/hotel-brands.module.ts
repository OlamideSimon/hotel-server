import { Module } from '@nestjs/common';
import { HotelBrandsService } from './hotel-brands.service';
import { HotelBrandsController } from './hotel-brands.controller';

@Module({
  controllers: [HotelBrandsController],
  providers: [HotelBrandsService]
})
export class HotelBrandsModule {}
