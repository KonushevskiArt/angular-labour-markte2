import { Component, Input } from '@angular/core';
import { SummaryModel } from 'src/app/modules/summaries/models/summary';

@Component({
  selector: 'app-short-summary',
  templateUrl: './short-summary.component.html',
  styleUrls: ['./short-summary.component.css']
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
  workExperience : string;
  expectedSalary: string;
  createdBy: string;
  id: string

  ngOnInit(): void {
    this.name = this.data.name;
    this.surname = this.data.surname;
    this.location = this.data.location;
    this.targetVacancy = this.data.targetVacancy;
    this.expectedSalary = this.data.expectedSalary;
    this.employment = this.data.employment;
    this.createdBy = this.data.createdBy
    this.workExperience = this.data.workExperience
    this.contactNumber = this.data.contactNumber
 
    console.log(this.data);
    
  }

}
