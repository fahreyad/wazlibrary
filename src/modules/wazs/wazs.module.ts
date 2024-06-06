import { Module } from '@nestjs/common';
import { WazsController } from './wazs.controller';
import { WazsService } from './wazs.service';

@Module({
  controllers: [WazsController],
  providers: [WazsService],
})
export class WazsModule {}
