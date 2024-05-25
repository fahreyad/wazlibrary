import { Test, TestingModule } from '@nestjs/testing';
import { WazsController } from './wazs.controller';

describe('WazsController', () => {
  let controller: WazsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WazsController],
    }).compile();

    controller = module.get<WazsController>(WazsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
