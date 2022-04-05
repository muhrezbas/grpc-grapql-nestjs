import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { ReporterResponse } from '../dto/reporter-response';

export interface ReporterInterface {
  getReporter(
    key: Metadata,
  ): Observable<{
    Reporters: ReporterResponse[];
  }>;
}
