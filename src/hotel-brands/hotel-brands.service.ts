import { Injectable } from '@nestjs/common';
import { CreateHotelBrandDto } from './dto/create-hotel-brand.dto';
import { UpdateHotelBrandDto } from './dto/update-hotel-brand.dto';

@Injectable()
export class HotelBrandsService {
  create(createHotelBrandDto: CreateHotelBrandDto) {
    return 'This action adds a new hotelBrand';
  }

  findAll() {
    return `This action returns all hotelBrands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotelBrand`;
  }

  update(id: number, updateHotelBrandDto: UpdateHotelBrandDto) {
    return `This action updates a #${id} hotelBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotelBrand`;
  }
}
