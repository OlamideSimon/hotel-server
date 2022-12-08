import { IsString } from 'class-validator';

export class CreateHotelBrandDto {
  @IsString()
  name: string;
}
