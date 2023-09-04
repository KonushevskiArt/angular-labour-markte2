import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

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
