import { Component, Input, OnInit } from '@angular/core';
import { Location, VacancyModel } from 'src/app/modules/vacancies/models/vacancy';

@Component({
  selector: 'app-short-vacancy',
  templateUrl: './short-vacancy.component.html',
  styleUrls: ['./short-vacancy.component.css']
})
export class ShortVacancyComponent implements OnInit {

  @Input() data: VacancyModel

  title: string;
  salary: string;
  workExperience: string;
  date: string;
  location: Location;
  id: string;

  ngOnInit(): void {
    this.title = this.data.title;
    this.salary = this.data.salary;
    this.id = this.data.id
    this.workExperience = this.data.workExperience
    this.date = this.data.date   
    this.location = this.data.location
    
  }

}
