// import { ConfigService } from './config/config.service';
import { applicationContext } from './app.context';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as handlebars from 'handlebars';

async function bootstrap(): Promise<void> {
  const app = await applicationContext();
  handlebars.registerHelper('toLocaleString', function (value) {
    return value.toLocaleString('id-ID');
  });
  // const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  Logger.log(
    `Listen on Port 3000`,
    '[firstAPI]',
  );
}
bootstrap().catch((err) => {
  Logger.error(err.message, err.stack, '[firstAPI]');
});
