import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: []
})
export class LogInComponent {
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  isSubmitted = false;
  isOpen = false;

  openModal = () => {
    this.isOpen = true;
  }

  hasError = (fieldName: string, validationType: string) => {
    return this.registerForm.get(fieldName)?.hasError(validationType) &&
    this.isSubmitted;
  }

  closeModal = () => {
    this.isOpen = false;
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
