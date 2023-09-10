import { Component, Input, OnInit } from '@angular/core';
import { SummaryModel } from '../../models/summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() data: SummaryModel;

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
    this.createdBy = this.data.createdBy;
    this.workExperience = this.data.workExperience;
    this.contactNumber = this.data.contactNumber;
    this.id = this.data.id;
 
    console.log(this.data);
    
  }

}
