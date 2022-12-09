import { HotelBrand } from 'src/hotel-brands/entities/hotel-brand.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  address: string;

  @ManyToOne(() => HotelBrand, (hotelBrand) => hotelBrand.hotels)
  hotelBrand: HotelBrand;
}
