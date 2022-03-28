import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'lib/model/entities';
import { Repository } from 'typeorm';
import { NewsResponse } from './dto/news.response';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly NewsRepository: Repository<News>,
  ) { }

  async listNews(): Promise<NewsResponse> {
    try {
      const [data, total] = await this.NewsRepository.findAndCount({
        order: {
          name: "ASC",
          id: "DESC"
        }
      });
      // console.log(news)
      // news.forEach(element => {
      //   console.log(element.id)
      // });
      // return news;
      // return {} as NewsResponse
      return { data, total } as NewsResponse;
    } catch (err) {
      console.log(err, "halo")
      if (err instanceof ApolloError) {
        throw err;
      }
      Logger.error(err.message, err.stack, `[NewsService][listNews]`);
      throw new ApolloError('Failed get News.', `INTERNAL_SERVER_ERROR`);
    }
  }
}
