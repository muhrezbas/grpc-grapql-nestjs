import { Args, Query, Resolver } from '@nestjs/graphql';
import { ReporterService } from './reporter.service';
import { GetReporterInput } from './dto/get-reporter.input';
import { GetReporterSingleInput } from './dto/get-reporter-single.input'
import { EditReporterInput } from './dto/edit-reporter.input'
import { CreateReporterInput } from './dto/create-reporter.input'
import { GetReporterResponse } from './dto/get-reporter.response';
import { GetReporterSingleResponse } from './dto/get-reporter-single.response'

@Resolver()
export class ReporterResolver {
  constructor(private readonly reporterService: ReporterService) {}

  @Query(() => GetReporterResponse)
  async getReporter(
    @Args('getReporterInput') getReporterInput: GetReporterInput,
  ): Promise<GetReporterResponse> {
    const reporters = await this.reporterService.getReporter(getReporterInput);
    console.log(reporters, "resolve")
    return { reporters };
  }

  @Query(() => GetReporterSingleResponse)
  async getReporterByID(
    @Args('getReporterSingleInput') getReporterSingleInput: GetReporterSingleInput,
  ): Promise<GetReporterSingleResponse> {
    const reporter = await this.reporterService.getReporterByID(getReporterSingleInput);
    console.log(reporter, "resolver")
    return { reporter };
  }

  @Query(() => GetReporterSingleResponse)
  async editReporter(
    @Args('editReporterInput') editReporterInput: EditReporterInput,
  ): Promise<GetReporterSingleResponse> {
    const reporter = await this.reporterService.editReporter(editReporterInput);
    console.log(reporter, "resolver")
    return { reporter };
  }

  @Query(() => GetReporterSingleResponse)
  async createReporter(
    @Args('createReporterInput') createReporterInput: CreateReporterInput,
  ): Promise<GetReporterSingleResponse> {
    const reporter = await this.reporterService.createReporter(createReporterInput);
    console.log(reporter, "resolver")
    return { reporter };
  }

}
