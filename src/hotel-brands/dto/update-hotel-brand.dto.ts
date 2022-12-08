import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelBrandDto } from './create-hotel-brand.dto';

export class UpdateHotelBrandDto extends PartialType(CreateHotelBrandDto) {}
