import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingInViewComponent } from '../sing-up-view/sing-in-view.component';
import { PlaylistsViewComponent } from '../playlists-view/playlists-view.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/sing-in'
      },
      {
        path: 'sing-in',
        pathMatch: 'full',
        component: SingInViewComponent,
      },
      {
        path: 'playlists',
        pathMatch: 'full',
        component: PlaylistsViewComponent
      }
    ])
  ],
  exports: [RouterModule],
  providers: [],
})
export class ContentRoutingModule { }
