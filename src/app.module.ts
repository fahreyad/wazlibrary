import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WazsModule } from './wazs/wazs.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [WazsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('wazs');
  }
}
