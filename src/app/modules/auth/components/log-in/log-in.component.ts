import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginData, LoginResponse } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: []
})
export class LogInComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  registerForm = this.fb.group({
    username: ['Fima', [Validators.required, Validators.minLength(3)]],
    password: ['123456', [Validators.required, Validators.minLength(5)]]
  })

  isSubmitted = false;
  isFetchedError = false;
  isLoading = false;
  isOpen = true;
  fetchedErrorMessage = 'Invalid password or username'

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

  hideFetchedError = () => {
    this.isFetchedError = false;
  }
  
  onSubmit = () => {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    const {username, password} = this.registerForm.value
    if (username && password) {
      this.isLoading = true;
      this.authService.login(this.registerForm.value as LoginData).subscribe({
        next:(data: LoginResponse) => {
          console.log(data)
          this.authService.token = data;
          this.authService.isAuthorized = true;
          this.isLoading = false;
          this.registerForm.reset()
          this.isOpen = false;
          this.router.navigate(['/']);
        },
        error: error => {
          console.log(error)
          this.isLoading = false; 
          this.isFetchedError = true;
        }
    });
    }
    
  }

  isValid = (fieldName: string) => {
    return this.registerForm.get(fieldName)?.invalid && this.isSubmitted;
  }
}
