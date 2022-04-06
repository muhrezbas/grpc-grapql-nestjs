import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { ReporterResponse } from '../dto/reporter-response';
import { GetReporterSingleInput } from '../dto/get-reporter-single.input';
import { EditReporterInput } from '../dto/edit-reporter.input'
import { CreateReporterInput } from '../dto/create-reporter.input'

export interface ReporterInterface {
  getReporter(
    key: Metadata,
  ): Observable<{
    Reporters: ReporterResponse[];
  }>;
  getReporterByID(
    getReporterSingleInput : GetReporterSingleInput,
    key: Metadata,
  ): Observable<{
    Reporter: ReporterResponse;
  }>;
  editReporter(
    editReporterInput : EditReporterInput,
    key: Metadata,
  ): Observable<{
    Reporter: ReporterResponse;
  }>;
  createReporter(
    createReporterInput : CreateReporterInput,
    key: Metadata,
  ): Observable<{
    Reporter: ReporterResponse
  }>;
}
