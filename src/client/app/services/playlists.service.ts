import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class PlaylistsService {

  constructor(private http: HttpClient, private LS: LocalStorageService) {
    //
  }

  getPlaylists(): Observable<any> {
    return this.http.get(`/playlist.get?access_token=${this.LS.getItem(this.LS.ACCESS_TOKEN)}`);
  }
}
