import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IFormatException } from 'src/domain';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor() {
    //
  }
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request: any = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? (exception.getResponse() as IFormatException)
        : { message: (exception as Error).message, code_error: null };

    const responseData = {
      ...{
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      },
      ...message,
    };
    response.status(status).json(responseData);
  }
}
