import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WazsModule } from './modules/wazs/wazs.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ArtistsModule } from './modules/artists/artists.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [WazsModule, ArtistsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('wazs');
  }
}
