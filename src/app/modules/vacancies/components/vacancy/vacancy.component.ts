import { Component, Input, OnInit } from '@angular/core';
import { VacancyModel } from '../../models/vacancy';
import { Location } from './../../models/vacancy';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  @Input() data: VacancyModel;

  title: string;
  salary: string;
  createdBy: string;
  workExperience: string;
  contactNumber: string;
  date: string;
  location: Location;
  id: string;

  ngOnInit(): void {
    this.title = this.data.title;
    this.salary = this.data.salary;
    this.createdBy = this.data.createdBy
    this.workExperience = this.data.workExperience
    this.contactNumber = this.data.contactNumber
    this.date = this.data.date   
    this.location = this.data.location
    this.id = this.data.id
    
  }

}
