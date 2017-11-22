import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InterceptorServiceService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer 1234xxx` }
    });
    return next.handle(authReq);
  }

}
