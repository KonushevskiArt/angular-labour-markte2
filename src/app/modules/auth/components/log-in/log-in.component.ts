import { Component } from '@angular/core';

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
    console.log('open modal ');
  }

  closeModal = () => {
    this.isOpen = false;
    console.log('close modal');
  }
}
