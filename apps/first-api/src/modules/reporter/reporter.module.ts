import { Module } from '@nestjs/common';
import { ReporterService } from './reporter.service';
import { ReporterResolver } from './reporter.resolver'
import { ConfigModule } from '../../config/config.module';
import {
  ClientOptions,
  ClientProvider,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { ConfigService } from '../../config/config.service';
import { NODE_ENVIRONMENT } from 'lib/shared/constants';
import { credentials } from 'grpc';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        inject: [ConfigService],
        imports: [ConfigModule],
        name: 'REPORTER_PACKAGE',
        useFactory: (key: ConfigService): ClientProvider => {
          return {
            name: 'REPORTER_PACKAGE',
            transport: Transport.GRPC,
            options: {
              credentials:
                key.NODE_ENV !== NODE_ENVIRONMENT.DEVELOPMENT
                  ? credentials.createSsl()
                  : null,
              url: 'localhost:3001',
              package: 'reporter',
              protoPath: join(__dirname, './modules/reporter/reporter.proto'),
            },
          } as ClientOptions;
        },
      },
    ]),
  ],
  providers: [ReporterResolver, ReporterService],
  exports: [ReporterService],
})
export class ReporterModule {}
