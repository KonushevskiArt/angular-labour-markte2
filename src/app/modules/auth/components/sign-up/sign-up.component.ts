import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignUpData, SignUpResponse } from '../../types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: []
})
export class SignUpComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authService.loginObserve$.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    })
  }

  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  fetchedErrorMessage = '';
  isLoggedIn = false;
  isSubmitted = false;
  isOpen = false;
  isLoading = false;
  isFetchedError = false;

  openModal = () => {
    this.isOpen = true;
  }

  closeModal = () => {
    this.isOpen = false;
  }

  hasError = (fieldName: string, validationType: string) => {
    return this.registerForm.get(fieldName)?.hasError(validationType) &&
    this.isSubmitted && this.registerForm.touched;
  }

  onSubmit = () => {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    const {username, password, email} = this.registerForm.value
    if (username && password && email) { 
      this.isLoading = true;
      this.authService.signupHTTP(this.registerForm.value as SignUpData).subscribe({
        next:(data: SignUpResponse) => {
          console.log('success sign up', data)
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
            if (error.error.notUniqueEmail) {
              this.fetchedErrorMessage = 'User with this email is already exist'
            }
            if (error.error.notUniqueName) {
              this.fetchedErrorMessage = 'User with this name is already exist'
            }
          }
          this.isLoading = false; 
          this.isFetchedError = true;
        }
      })
    }
  }

  isValid = (fieldName: string) => {
    return this.registerForm.get(fieldName)?.invalid && this.isSubmitted && this.registerForm.touched;
  }

}
