import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    const hotel = await this.hotelRepository.create(createHotelDto);
    return this.hotelRepository.save(hotel);
  }

  findAll() {
    return this.hotelRepository.find();
  }

  async findOne(id: number) {
    const hotel = await this.hotelRepository.findOneBy({ id });

    if (!hotel)
      throw new HttpException('Hotel does not exist', HttpStatus.NOT_FOUND);

    return hotel;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto) {
    await this.findOne(id);

    const hotel = await this.hotelRepository.preload({
      id,
      ...updateHotelDto,
    });

    return hotel;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.hotelRepository.delete(id);
  }
}
