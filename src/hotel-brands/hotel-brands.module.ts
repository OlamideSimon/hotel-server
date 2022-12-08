import { Module } from '@nestjs/common';
import { HotelBrandsService } from './hotel-brands.service';
import { HotelBrandsController } from './hotel-brands.controller';
import { HotelBrand } from './entities/hotel-brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HotelBrand])],
  controllers: [HotelBrandsController],
  providers: [HotelBrandsService],
})
export class HotelBrandsModule {}
