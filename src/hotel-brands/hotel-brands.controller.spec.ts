import { Test, TestingModule } from '@nestjs/testing';
import { HotelBrandsController } from './hotel-brands.controller';
import { HotelBrandsService } from './hotel-brands.service';

describe('HotelBrandsController', () => {
  let controller: HotelBrandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelBrandsController],
      providers: [HotelBrandsService],
    }).compile();

    controller = module.get<HotelBrandsController>(HotelBrandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
