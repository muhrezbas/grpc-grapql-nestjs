import { Metadata } from 'grpc';

export abstract class GrpcClient {
  protected readonly metadata: Metadata;
  protected constructor(key: string) {
    this.metadata = new Metadata();
    this.metadata.add('x-api-key', key);
  }
}
