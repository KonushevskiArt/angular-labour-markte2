import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISalary, Location, VacancyModel } from '../../models/vacancy';
import { VacanciesService } from '../../services/vacancies.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-vacancy-page',
  templateUrl: './edit-vacancy-page.component.html',
  styleUrls: []
})
export class EditVacancyPageComponent implements OnInit {
  
  constructor(public route: ActivatedRoute, private vacanciesService: VacanciesService, private fb: FormBuilder) {}


  vacancyId: string;
  data: VacancyModel | undefined;

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


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vacancyId = params['id'];
      this.data = this.vacanciesService.getOneById(this.vacancyId)

      if (this.data) {
        const {
          title,
          date,
          description,
          workExperience,
          requirements,
          employment,
          salary,
          location,
          contactNumber,
          createdBy,
          id
        } = this.data;

        this.registerForm.patchValue({
          title,
          date,
          description: description.join('\n'),
          workExperience,
          requirements: requirements.join('\n'),
          employment,
          quantity: salary.value,
          currency: salary.currency,
          city: location.city,
          street: location.street,
          house: location.house,
          contactNumber,
        })
      }
    })
  }

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
