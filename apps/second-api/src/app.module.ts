import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './config/database/database.module';
// import { AppController } from './app.controller';
import { NewsModule } from './modules/news/news.module';
import { ReporterModule } from './modules/reporter/reporter.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { graphqlErrorHandler } from 'lib/shared/helpers';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    NewsModule,
    ReporterModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ headers: req.headers }),
      formatError: (err: GraphQLError): GraphQLFormattedError => {
        return graphqlErrorHandler(err);
      },
    }),

  ],
  // controllers: [AppController],

  providers: [AppService],
})
export class AppModule { }
