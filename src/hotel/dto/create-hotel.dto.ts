import { IsString } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  address: string;
}
