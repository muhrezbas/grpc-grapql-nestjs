// import { ConfigService } from './config/config.service';
import { applicationContext } from './app.context';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
// import * as handlebars from 'handlebars';

async function bootstrap(): Promise<void> {
  const app = await applicationContext();
  // handlebars.registerHelper('toLocaleString', function (value) {
  //   return value.toLocaleString('id-ID');
  // });
  // const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:3001`,
      package: ['reporter'],
      protoPath: [
        join(__dirname, './modules/reporter/reporter.proto'),
      ],
    },
  });
  await app.startAllMicroservices();
  Logger.log(
    `Listen on Port 3001`,
    'secondAPI]',
  );
}
bootstrap().catch((err) => {
  Logger.error(err.message, err.stack, '[secondAPI]');
});
