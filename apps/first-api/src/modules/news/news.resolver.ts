import { Parent, ResolveField,  Resolver, Query } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { NewsResponse } from './dto/news.response';
import { News } from 'lib/model/entities';

@Resolver(() => News)
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Query(() => NewsResponse)
  async listNews(): Promise<NewsResponse> {
    return await this.newsService.listNews();
  }
}

