import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  moduleId: module.id,
  selector: 'sing-in-component',
  templateUrl: 'sing-in-view.component.html',
  styleUrls: ['sing-in-view.component.css'],
})
export class SingInViewComponent {

  constructor(private authService: AuthService, private router: Router, private LS: LocalStorageService) {
    //
  }

  login(crenditals: any) {
    this.authService.login(crenditals).subscribe((response: any) => {
      console.log(response);
      if (response.result === 'success') {
        this.LS.setItem(this.LS.ACCESS_TOKEN, response.response.access_token);
        this.router.navigate(['/playlists']);
      } else {
        console.log(response.result);
      }
    })
  }
}
