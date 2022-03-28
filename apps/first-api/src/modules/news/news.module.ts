import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsResolver } from './news.resolver';
import { News } from 'lib/model/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(
    [News])],
  providers: [NewsResolver, NewsService],
  exports: [NewsService],
})
export class NewsModule {}
