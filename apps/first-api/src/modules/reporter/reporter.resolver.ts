import { Args, Query, Resolver } from '@nestjs/graphql';
import { ReporterService } from './reporter.service';
import { GetReporterInput } from './dto/get-reporter.input';
import { GetReporterResponse } from './dto/get-reporter.response';

@Resolver()
export class ReporterResolver {
  constructor(private readonly reporterService: ReporterService) {}

  @Query(() => GetReporterResponse)
  async getReporter(
    @Args('getReporterInput') getReporterInput: GetReporterInput,
  ): Promise<GetReporterResponse> {
    const reporters = await this.reporterService.getReporter(getReporterInput);
    return { reporters };
  }

}
