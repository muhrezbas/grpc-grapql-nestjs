import { google } from '@google-cloud/pubsub/build/protos/protos';
import PubsubMessage = google.pubsub.v1.PubsubMessage;

export class PubsubDto {
  message: PubsubMessage;
  subscription: string;
}
