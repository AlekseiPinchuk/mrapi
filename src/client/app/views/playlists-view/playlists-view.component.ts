import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';

@Component({
  moduleId: module.id,
  selector: 'playlists-view-component',
  templateUrl: 'playlists-view.component.html',
  styleUrls: ['playlists-view.component.css'],
})
export class PlaylistsViewComponent implements OnInit {
  public playlists: any[];

  constructor(private playlistsService: PlaylistsService) {
    //
  }

  ngOnInit() {
    this.playlistsService.getPlaylists().subscribe((resp: any) => {
      this.playlists = resp.response.items;
    });
  }
}
