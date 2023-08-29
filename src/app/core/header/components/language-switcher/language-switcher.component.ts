import { Component, OnInit } from '@angular/core';

type TLanguages  = 'ru' | 'en';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: []
})
export class LanguageSwitcherComponent implements OnInit {
  isOpen = false
  currentLanguage: TLanguages = 'ru'
  languagesMap = {
    'ru': 'Ru',
    'en': 'En'
  }

  toggleMenu = (evt: MouseEvent) => {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.currentLanguage = (localStorage['language']) || 'en'; 
  }

  switchLanguage = (lang: TLanguages) => {
    this.currentLanguage = lang;
    this.isOpen = !this.isOpen;
    localStorage['language'] = lang;
    console.log(localStorage['language'])
    
  }

  

}
