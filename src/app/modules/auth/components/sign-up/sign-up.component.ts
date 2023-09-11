import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: []
})
export class SignUpComponent {
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  isSubmitted = false;
  isOpen = true;

  openModal = () => {
    this.isOpen = true;
    console.log('open modal ');
  }

  closeModal = () => {
    this.isOpen = false;
    console.log('close modal');
  }

  hasError = (fieldName: string, validationType: string) => {
    return this.registerForm.get(fieldName)?.hasError(validationType) &&
    this.isSubmitted;
  }

  onSubmit = () => {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    // this.registerForm.reset()

    // service + redirect
  }

  isValid = (fieldName: string) => {
    return this.registerForm.get(fieldName)?.invalid && this.isSubmitted;
  }

}
