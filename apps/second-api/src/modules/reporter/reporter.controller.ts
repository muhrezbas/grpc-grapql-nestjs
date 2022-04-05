import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ReporterService } from './reporter.service';
import { CreateReporterInterface } from './interfaces/create-reporter.interface';
import { GetReporterInput} from './interfaces/get-reporter-input.interface'
import { EditReporterInterface } from './interfaces/edit-reporter.interface'
import { IReporter } from './interfaces/reporter.interface';
// import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller()
export class ReporterController {
  constructor(private readonly reporterService: ReporterService) {}

  // @UseGuards(LocalAuthGuard)
  @GrpcMethod('ReporterService')
  async getReporter(
    // getReporterInput: GetReporterInput,
  ): Promise<{ Reporters: IReporter[] }> {
     const res = await this.reporterService.getReporter(
      // getReporterInput.id
    );
    console.log(res,"contro")
    return res;
  }
  @GrpcMethod('ReporterService')
  async createReporter(
    createReporterInterface: CreateReporterInterface
  ): Promise<{Reporter: IReporter}> {
     const res = await this.reporterService.createReporter(
     createReporterInterface
    );
    console.log(res,"contro kok")
    return {Reporter: res};
  }
  @GrpcMethod('ReporterService')
  async getReporterByID(
    getReporterInput: GetReporterInput
  ): Promise<{Reporter: IReporter}> {
     const res = await this.reporterService.getReporterByID(
     getReporterInput.id
    );
    console.log(res,"contro kok")
    return {Reporter: res};
  }
  @GrpcMethod('ReporterService')
  async editReporter(
    editReporterInterface: EditReporterInterface
  ): Promise<{Reporter: IReporter}> {
     const res = await this.reporterService.editReporter(
     editReporterInterface
    );
    console.log(res,"contro kok")
    return {Reporter: res};
  }
}
