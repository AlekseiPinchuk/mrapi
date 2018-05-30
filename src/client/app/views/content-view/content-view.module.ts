import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentViewComponent } from './content-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContentRoutingModule } from './content-view-routing.module';
import { SingInViewModule } from '../sing-up-view/sing-in-view.module';
import { PlaylistsViewModule } from '../playlists-view/playlists-view.module';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ContentRoutingModule,
    SingInViewModule,
    PlaylistsViewModule
  ],
  declarations: [ContentViewComponent],
  exports: [ContentViewComponent],
  providers: [
    LocalStorageService
  ]

})
export class ContentViewModule { }
