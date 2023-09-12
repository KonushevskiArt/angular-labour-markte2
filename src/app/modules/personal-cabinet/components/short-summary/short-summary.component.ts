import { Component, Input } from '@angular/core';
import { SummaryModel } from 'src/app/modules/summaries/models/summary';
import { ISalary, Location } from 'src/app/modules/vacancies/models/vacancy';

@Component({
  selector: 'app-short-summary',
  templateUrl: './short-summary.component.html',
  styleUrls: []
})
export class ShortSummaryComponent {

  @Input() data: SummaryModel

  name: string;
  surname: string;
  contactNumber: string;
  birthDate: string;
  location: string;
  targetVacancy: string;
  employment: string;
  workExperience : string[];
  expectedSalary: ISalary;
  createdBy: string;
  id: string

  ngOnInit(): void {
    this.name = this.data.name;
    this.surname = this.data.surname;
    this.location = this.data.location;
    this.targetVacancy = this.data.targetVacancy;
    this.expectedSalary = this.data.expectedSalary;
    this.employment = this.data.employment;
    this.createdBy = this.data.createdBy;
    this.workExperience = this.data.workExperience;
    this.contactNumber = this.data.contactNumber;
    this.id = this.data.id;
 
    console.log(this.data);
    
  }

}
