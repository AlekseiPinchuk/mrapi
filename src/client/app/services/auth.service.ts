import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
    //
  }

  login(loginParams: any): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('username', loginParams.username);
    formData.append('password', loginParams.password);

    return this.http.post('/session.plaintextLogin', formData);
  }

  checkToken(): Observable<any> {
    return this.http.get('/session.session.keepalive')
  }
}
