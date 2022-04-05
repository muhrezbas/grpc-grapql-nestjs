import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config.service';
import {
  News, Reporter
} from 'lib/model/entities';
import { ConfigModule } from '../config.module';
// import { NODE_ENVIRONMENT } from 'lib/shared/constants';
const entities = [
  News,
  Reporter
];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.DB_HOST,
          port: config.DB_PORT,
          username: config.DB_USERNAME,
          password: config.DB_PASSWORD,
          database: config.DB_DATABASE,
          cache: {
            type: 'redis',
            options: {
              host: "localhost",
              port: "6379",
              password: "",
            },
            ignoreErrors:
              config.NODE_ENV !== "sit" &&
              config.NODE_ENV !== "development",
          },
          ssl: true,
          extra: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
          entities ,
          timezone: 'Z',
          logging:
            config.NODE_ENV === "development" ? 'all' : false,
        };
      },
    })
  ],
})
export class DatabaseModule { }
