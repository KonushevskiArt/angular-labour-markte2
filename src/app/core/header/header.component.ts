import { Component, Input } from '@angular/core';
import { AuthService } from './../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  constructor(private authService: AuthService) {
    this.authService.userNameObserve$.subscribe((value: string) => {
      this.userName = value;
    })
  }
  
  userName = '';
  isLoggedIn = false;

  @Input() isDarkMode: boolean 

  @Input() toggleThemeMode: () => void 

  

}
