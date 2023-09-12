import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-vacancy-page',
  templateUrl: './create-vacancy-page.component.html',
  styleUrls: []
})

export class CreateVacancyPageComponent {
  constructor(private fb: FormBuilder) {}


  registerForm = this.fb.group({
    title: ['', [Validators.required]],
    date: ['', [Validators.required]],
    description: ['', [Validators.required]],
    workExperience: [0, [Validators.required]],
    requirements: ['', [Validators.required]],
    employment: ['', [Validators.required]],
    quantity: 0,
    currency: '',
    city: ['', [Validators.required]],
    street: ['', [Validators.required]],
    house: ['', [Validators.required]],
    contactNumber: ['', [Validators.required]],
  })

  isSubmitted = false;

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
