// Framework
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

// External
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Infrastructure
import { FormatResponse } from './format-response.implementation';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, FormatResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<FormatResponse<T>> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();

    // Validate the status code of the response
    const done = request.res.statusCode >= 200 && request.res.statusCode < 300;

    return next.handle().pipe(
      map((data): FormatResponse<T> => {
        return new FormatResponse(data).setDone(done);
      }),
    );
  }
}
