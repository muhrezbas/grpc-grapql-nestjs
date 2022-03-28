import { HttpException, HttpStatus } from '@nestjs/common';

export const errorResponse = (
  message: string,
  statusCode: HttpStatus,
): { message: string; statusCode: HttpStatus } => {
  throw new HttpException(message, statusCode);
};
