import { Hotel } from 'src/hotel/entities/hotel.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HotelBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Hotel, (hotel) => hotel.hotelBrand, {
    eager: true,
    cascade: ['remove'],
  })
  hotels: Hotel[];
}
