import { Injectable, Logger } from '@nestjs/common';
// import { GetPricingInterface } from '../shipper/interfaces/get-price-reporter.interface';
// import { ShipperService } from '../shipper/shipper.service';
import { CreateReporterInterface } from './interfaces/create-reporter.interface';
import { EditReporterInterface } from './interfaces/edit-reporter.interface'
import { IReporter } from './interfaces/reporter.interface';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Reporter } from 'lib/model/entities';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class ReporterService {
  constructor(
    @InjectRepository(Reporter)
    private readonly ReporterRepository: Repository<Reporter>,
    private readonly connection: Connection,

    // private readonly shipperService: ShipperService,
  ) {}

  async getReporter(): Promise<{ Reporters: IReporter[] }> {
    try {
      const data = await this.ReporterRepository.find({
        // where: { id },
        order: {
          name: "ASC",
          id: "DESC"
        }
      });
      console.log(data, "halo")
      return { Reporters: data };
    } catch (err) {
      Logger.error(err.message, err.stack, '[ReporterService][getReporter]');
      throw new RpcException('Failed get price shipper');
    }
  }


  async getReporterByID(id: string): Promise<IReporter> {
    return await this.ReporterRepository.findOne({ where: { id } });
  }

  async createReporter(
    createReporterInterface: CreateReporterInterface
  ) : Promise<IReporter> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.startTransaction();
    const reporter = await queryRunner.manager.create(Reporter, createReporterInterface)
    await queryRunner.manager.save(Reporter, reporter)
    await queryRunner.commitTransaction();
    console.log("halo")
    return reporter;
  }

  async editReporter(
    editReporterInterface: EditReporterInterface
  ) : Promise<IReporter> {
    const {id, topicId, name, asal} = editReporterInterface;
    const payload = {
      "topicId" : topicId,
      "name" : name,
      "asal" : asal,
    }
    let reporter = await this.ReporterRepository.findOne({ where : { id }});
    await this.ReporterRepository.update({id}, payload);
    await reporter.reload();
    console.log(reporter)
    return reporter;
  }
}
