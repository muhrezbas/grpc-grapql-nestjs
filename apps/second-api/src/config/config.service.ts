import { from } from 'env-var';
import { config } from 'dotenv';
config({ path: 'apps/first-api/.env' });

export class ConfigService {
  private env = from(process.env);
  public readonly NODE_ENV = this.env.get('NODE_ENV').required().asString();
  public readonly PORT = this.env.get('PORT').required().asPortNumber();

  public readonly DB_HOST = this.env.get('DB_HOST').required().asString();
  public readonly DB_DATABASE = this.env
    .get('DB_DATABASE')
    .required()
    .asString();
  public readonly DB_USERNAME = this.env
    .get('DB_USERNAME')
    .required()
    .asString();
  public readonly DB_PASSWORD = this.env
    .get('DB_PASSWORD')
    .required()
    .asString();
  public readonly DB_PORT = this.env.get('DB_PORT').required().asIntPositive();

  public readonly JWT_SECRET = this.env.get('JWT_SECRET').required().asString();
  public readonly JWT_EXPIRED_IN_MINUTE = this.env
    .get('JWT_EXPIRED_IN_MINUTE')
    .required()
    .asIntPositive();


  public readonly REDIS_HOST = this.env.get('REDIS_HOST').required().asString();
  public readonly REDIS_PORT = this.env.get('REDIS_PORT').required().asString();
  // public readonly REDIS_AUTH = this.env.get('REDIS_AUTH').required().asString();
}
