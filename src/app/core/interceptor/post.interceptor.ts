import { map, Observable } from 'rxjs';
import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";

@Injectable()
export class PostInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    response
    return next.handle().pipe(
        map((content) => {
            if ((request.method as string).toLowerCase() === 'post') response.status(HttpStatus.OK);
            return content;
        })
    );
    // Probably have to do something a bit more complex than this but this is the general gist
  }
}