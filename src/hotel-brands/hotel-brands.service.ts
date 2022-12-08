import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHotelBrandDto } from './dto/create-hotel-brand.dto';
import { UpdateHotelBrandDto } from './dto/update-hotel-brand.dto';
import { HotelBrand } from './entities/hotel-brand.entity';

@Injectable()
export class HotelBrandsService {
  constructor(
    @InjectRepository(HotelBrand)
    private readonly hotelBrandRepository: Repository<HotelBrand>,
  ) {}

  async create(createHotelBrandDto: CreateHotelBrandDto) {
    const hotelBrand = await this.hotelBrandRepository.create(
      createHotelBrandDto,
    );
    return this.hotelBrandRepository.save(hotelBrand);
  }

  findAll() {
    return this.hotelBrandRepository.find({
      order: {
        name: 'ASC',
        hotels: {
          name: 'ASC',
        },
      },
    });
  }

  async findOne(id: number) {
    const hotelBrand = await this.hotelBrandRepository.findOneBy({ id });

    if (!hotelBrand)
      throw new HttpException('Hotel does not exist', HttpStatus.NOT_FOUND);

    return hotelBrand;
  }

  async update(id: number, updateHotelBrandDto: UpdateHotelBrandDto) {
    await this.findOne(id);

    const hotelBrand = await this.hotelBrandRepository.preload({
      id,
      ...updateHotelBrandDto,
    });

    return hotelBrand;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.hotelBrandRepository.delete(id);
  }
}
