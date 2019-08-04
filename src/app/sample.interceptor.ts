    import {Injectable} from '@angular/core';
    import {Observable} from 'rxjs';
    import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
    import {tap} from 'rxjs/operators';
    @Injectable()
    export class SampleInterceptor implements HttpInterceptor
    {
        intercept(
            request: HttpRequest<any>, next: HttpHandler
          ) : Observable<HttpEvent<any>> {
            console.log(request);
            //return next.handle(request);
            return next.handle(request).pipe((tap(evt=>{
              console.log(evt);
            })))
          }
    }