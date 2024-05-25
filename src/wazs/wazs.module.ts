import { Module } from '@nestjs/common';
import { WazsController } from './wazs.controller';

@Module({
  controllers: [WazsController],
})
export class WazsModule {}
