import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginData, LoginResponse } from '../../types';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: []
})
export class LogInComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authService.loginObserve$.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    })
  }

  registerForm = this.fb.group({
    username: ['Fima', [Validators.required, Validators.minLength(3)]],
    password: ['123456', [Validators.required, Validators.minLength(5)]]
  })
  
  isLoggedIn = false;
  isSubmitted = false;
  isFetchedError = false;
  isLoading = false;
  isOpen = false;
  fetchedErrorMessage = ''


  openModal = () => {
    this.isOpen = true;
  }

  hasError = (fieldName: string, validationType: string) => {
    return this.registerForm.get(fieldName)?.hasError(validationType) &&
    this.isSubmitted && this.registerForm.touched;
  }

  closeModal = () => {
    this.isOpen = false;
  }

  hideFetchedError = () => {
    this.isFetchedError = false;
  }
  
  onSubmit = () => {
    this.isSubmitted = true;
    const {username, password} = this.registerForm.value
    if (username && password) {
      this.isLoading = true;
      this.authService.loginHTTP(this.registerForm.value as LoginData).subscribe({
        next:(data: LoginResponse) => {
          console.log(data)
          this.authService.login(data, username)
          this.isLoading = false;

          this.registerForm.reset();
          this.registerForm.markAsPristine();
          this.registerForm.markAsUntouched();

          this.isOpen = false;
        },
        error: error => {
          console.dir(error)
          if (error.status === 0) {
            this.fetchedErrorMessage = 'Server error, try again later...'
          }
          if (error.status === 400) {
            this.fetchedErrorMessage = 'Invalid password or username'
          }
          this.isLoading = false; 
          this.isFetchedError = true;
        }
    });
    }
    
  }

  isValid = (fieldName: string) => {
    return this.registerForm.get(fieldName)?.invalid && this.isSubmitted && this.registerForm.touched;
  }
}
