import { Test, TestingModule } from '@nestjs/testing';
import { HotelBrandsService } from './hotel-brands.service';

describe('HotelBrandsService', () => {
  let service: HotelBrandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelBrandsService],
    }).compile();

    service = module.get<HotelBrandsService>(HotelBrandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
