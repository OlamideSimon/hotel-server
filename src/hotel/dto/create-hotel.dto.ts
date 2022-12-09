import { IsOptional, IsString } from 'class-validator';
import { HotelBrand } from 'src/hotel-brands/entities/hotel-brand.entity';

export class CreateHotelDto {
  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  hotelBrand: HotelBrand;
}
