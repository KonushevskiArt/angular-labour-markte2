import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-summary-page',
  templateUrl: './create-summary-page.component.html',
  styleUrls: []
})
export class CreateSummaryPageComponent {
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    targetVacancy: ['', [Validators.required]],
    city: ['', [Validators.required]],
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    employment: ['', [Validators.required]],
    workExperience: '',
    quantity: 0,
    currency: '',
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
