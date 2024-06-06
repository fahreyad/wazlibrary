import { Test, TestingModule } from '@nestjs/testing';
import { WazsService } from './wazs.service';

describe('WazsService', () => {
  let service: WazsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WazsService],
    }).compile();

    service = module.get<WazsService>(WazsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
