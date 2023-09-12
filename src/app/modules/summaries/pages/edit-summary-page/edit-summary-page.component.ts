import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummariesService } from '../../services/summaries.service';
import { SummaryModel } from '../../models/summary';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-summary-page',
  templateUrl: './edit-summary-page.component.html',
  styleUrls: []
})
export class EditSummaryPageComponent {
  constructor(public route: ActivatedRoute, private summariesService: SummariesService, private fb: FormBuilder) {}
  
  vacancyId: string;
  data: SummaryModel | undefined;

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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vacancyId = params['id'];
      this.data = this.summariesService.getOneById(this.vacancyId)

      if (this.data) {
        const {
          name,
          surname,
          location,
          targetVacancy,
          expectedSalary, 
          employment,
          createdBy,
          workExperience,
          contactNumber,
          birthDate,
        } = this.data;

        this.registerForm.patchValue({
          targetVacancy,
          city: location,
          name,
          surname,
          birthDate,
          employment,
          workExperience: workExperience.join(),
          quantity: expectedSalary.value,
          currency: expectedSalary.currency,
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
