import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent implements OnInit {
  isDarkMode = false;

  ngOnInit(): void {
    this.isDarkMode = JSON.parse(localStorage['isDarkMode']) || false;
  }

  toggleThemeMode = () => {
    this.isDarkMode = !this.isDarkMode;
    localStorage['isDarkMode'] = this.isDarkMode;
  }
}
