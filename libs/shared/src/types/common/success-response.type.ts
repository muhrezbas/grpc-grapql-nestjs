import { HttpStatus } from '@nestjs/common';

export type SuccessResponse = {
  message: string;
  statusCode: HttpStatus;
};
