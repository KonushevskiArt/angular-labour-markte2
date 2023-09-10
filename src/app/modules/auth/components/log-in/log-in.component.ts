import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  
  isOpen = false;
  password = '';
  email = '';

  openModal = () => {
    this.isOpen = true;
  }

  closeModal = () => {
    this.isOpen = false;
  }
}
