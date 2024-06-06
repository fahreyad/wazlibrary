import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Artist } from './src/modules/artists/artist.entity';
export const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'fahreyad',
  password: '123456',
  database: 'wazlibrary',
  //entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  entities: [Artist],
  synchronize: true,
};
