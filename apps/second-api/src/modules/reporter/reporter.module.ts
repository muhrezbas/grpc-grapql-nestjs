import { Module } from '@nestjs/common';
import { ReporterService } from './reporter.service';
import { ReporterController } from './reporter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reporter } from 'lib/model/entities';
// import { ShipperModule } from '../shipper/shipper.module';
// import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reporter])],
  controllers: [ReporterController],
  providers: [ReporterService],
  exports: [ReporterService],
})
export class ReporterModule {}
