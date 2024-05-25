import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WazsModule } from './wazs/wazs.module';

@Module({
  imports: [WazsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
