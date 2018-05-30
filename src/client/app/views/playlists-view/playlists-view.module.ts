import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PlaylistsViewComponent } from './playlists-view.component';
import { HeaderModule } from '../../components/header/header.module';
import { PlaylistsService } from '../../services/playlists.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HeaderModule
  ],
  declarations: [PlaylistsViewComponent],
  exports: [PlaylistsViewComponent],
  providers: [
    PlaylistsService
  ]

})
export class PlaylistsViewModule { }
