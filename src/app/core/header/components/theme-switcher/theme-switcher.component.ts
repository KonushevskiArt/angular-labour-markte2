import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: []
})
export class ThemeSwitcherComponent {

  @Input() isDarkMode: boolean 

  @Input() toggleThemeMode: () => void 

}
