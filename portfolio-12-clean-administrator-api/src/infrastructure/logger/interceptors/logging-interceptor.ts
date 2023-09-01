// Framework
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

// External
import { Observable } from 'rxjs';

// Infrastructure
import { LoggerService } from '../logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const now = Date.now();
    // const httpContext = context.switchToHttp();
    // const request = httpContext.getRequest();

    return next.handle().pipe();
  }
}
