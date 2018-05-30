import { Injectable } from '@angular/core';

const STRING: string = 'string';

@Injectable()
export class LocalStorageService {
  public readonly ACCESS_TOKEN: string = 'access_token';

  constructor() {
    //
  }

  public setItem(key: string, data: any) {
    localStorage.setItem(key, typeof(data) !== STRING ? JSON.stringify(data) : data);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  public unsetItem(key: string) {
    localStorage.removeItem(key);
  }
}
