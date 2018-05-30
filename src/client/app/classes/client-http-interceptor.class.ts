import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { Config } from '../shared/config/env.config';
// import 'rxjs/add/operator/catch';

@Injectable()
export class ClientHttpInterceptor implements HttpInterceptor {

  private apiUrl: string = Config.API;

  constructor() {
    //
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({url: this.apiUrl + req.url});

    //send the newly created request
    try {
      return next.handle(request);
    } catch (error) {
        if (error.status === 401 || error.status === 403) {
          console.log('123');
        }

        return Observable.throw(error);
    }
  }
}
