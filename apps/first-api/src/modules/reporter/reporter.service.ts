import { Inject, Injectable, Logger } from '@nestjs/common';
// import { GetPricingInterface } from '../shipper/interfaces/get-price-reporter.interface';
// import { ShipperService } from '../shipper/shipper.service';
import { GetReporterInput } from './dto/get-reporter.input';
import { GetReporterSingleInput } from './dto/get-reporter-single.input'
import { EditReporterInput} from './dto/edit-reporter.input'
import { CreateReporterInput } from './dto/create-reporter.input'
import { ReporterInterface } from './interfaces/reporter.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { GrpcClient } from 'lib/shared/helpers';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Reporter } from 'lib/model/entities';
// import { Repository } from 'typeorm';
import { ApolloError } from 'apollo-server-express';
import { ReporterResponse } from './dto/reporter-response';
import { map } from 'rxjs/operators';

@Injectable()
export class ReporterService extends GrpcClient {
  private readonly reporterInterface: ReporterInterface;
  constructor(
    @Inject('REPORTER_PACKAGE') private client: ClientGrpc,
    // private readonly ReporterRepository: Repository<Reporter>,
    // private readonly shipperService: ShipperService,
  ) {
    super('ngasal');
    this.reporterInterface =
      this.client.getService<ReporterInterface>('ReporterService');
  }

  async getReporter(
    getReporterInput: GetReporterInput
  ): Promise<ReporterResponse[]> {
    try {
      const { Reporters } = await this.reporterInterface
        .getReporter(this.metadata)
        .pipe(
          map((response) => {
            const list = [];
              response.Reporters.forEach((item) => {
                if (
                  item.topicId === getReporterInput.topicId
                ) {
                  list.push(item);
                }
              });
              return { Reporters: list };
          }),
        )
        .toPromise();
        console.log(Reporters)
        return Reporters;
    }
    catch (err) {
      Logger.error(err.message, err.stack, '[ReporterService][getReporter]');
      throw new ApolloError(
        'Gagal medapatkan data Reporter.',
        'INTERNAL_SERVER_ERROR',
      );
    }
  }
  async getReporterByID(
    getReporterSingleInput: GetReporterSingleInput
  ): Promise<ReporterResponse> {
    try {
      const {Reporter}  = await this.reporterInterface
        .getReporterByID(getReporterSingleInput ,this.metadata)
        .toPromise();
        console.log(Reporter, "nanan yah")
        return Reporter;
    }
    catch (err) {
      Logger.error(err.message, err.stack, '[ReporterService][getReporter]');
      throw new ApolloError(
        'Gagal medapatkan data Reporter.',
        'INTERNAL_SERVER_ERROR',
      );
    }
  }
    async editReporter(
      editReporterInput: EditReporterInput
    ): Promise<ReporterResponse> {
      try {
        const {Reporter}  = await this.reporterInterface
          .editReporter(editReporterInput ,this.metadata)
          .toPromise();
          console.log(Reporter, "nanan yah")
          return Reporter;
      }
      catch (err) {
        Logger.error(err.message, err.stack, '[ReporterService][getReporter]');
        throw new ApolloError(
          'Gagal medapatkan data Reporter.',
          'INTERNAL_SERVER_ERROR',
        );
      }
    }

    async createReporter(
      createReporterInput: CreateReporterInput
    ): Promise<ReporterResponse> {
      try {
        const {Reporter}  = await this.reporterInterface
          .createReporter(createReporterInput ,this.metadata)
          .toPromise();
          console.log(Reporter, "nanan yah")
          return Reporter;
      }
      catch (err) {
        Logger.error(err.message, err.stack, '[ReporterService][getReporter]');
        throw new ApolloError(
          'Gagal medapatkan data Reporter.',
          'INTERNAL_SERVER_ERROR',
        );
      }
    }

      

    
    
}
