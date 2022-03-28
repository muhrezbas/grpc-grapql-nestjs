import { HttpStatus } from '@nestjs/common';
export const successResponse = (
  message: string,
  statusCode: HttpStatus,
): { message: string; statusCode: HttpStatus } => {
  return {
    message,
    statusCode,
  };
};
