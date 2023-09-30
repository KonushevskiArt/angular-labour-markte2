import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: []
})
export class LogOutComponent {
  constructor(private authService: AuthService) {
    this.authService.loginObserve$.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    })
  }

  isLoggedIn = false;
  logout = () => {
    console.log('logout');
    this.authService.logout();

  }

}
