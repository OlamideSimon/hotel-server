import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HotelBrandsService } from './hotel-brands.service';
import { CreateHotelBrandDto } from './dto/create-hotel-brand.dto';
import { UpdateHotelBrandDto } from './dto/update-hotel-brand.dto';

@Controller('hotel-brands')
export class HotelBrandsController {
  constructor(private readonly hotelBrandsService: HotelBrandsService) {}

  @Post()
  create(@Body() createHotelBrandDto: CreateHotelBrandDto) {
    return this.hotelBrandsService.create(createHotelBrandDto);
  }

  @Get()
  findAll() {
    return this.hotelBrandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelBrandsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHotelBrandDto: UpdateHotelBrandDto,
  ) {
    return this.hotelBrandsService.update(+id, updateHotelBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelBrandsService.remove(+id);
  }
}
