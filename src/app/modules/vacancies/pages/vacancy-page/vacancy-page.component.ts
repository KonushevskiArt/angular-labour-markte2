import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacanciesService } from '../../services/vacancies.service';
import { Location, VacancyModel } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css']
})
export class VacancyPageComponent implements OnInit {
  
  constructor(public route: ActivatedRoute, private vacanciesService: VacanciesService) {}
  
  vacancyId: string;
  data: VacancyModel | undefined;

  title: string;
  salary: string;
  createdBy: string;
  workExperience: string;
  contactNumber: string;
  date: string;
  location: Location;
  id: string;
  description: string;
  requirements: string[];


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vacancyId = params['id'];
      this.data = this.vacanciesService.getOneById(this.vacancyId)

      if (this.data) {
        this.title = this.data.title;
        this.salary = this.data.salary;
        this.createdBy = this.data.createdBy
        this.workExperience = this.data.workExperience
        this.contactNumber = this.data.contactNumber
        this.date = this.data.date   
        this.location = this.data.location
        this.id = this.data.id
        this.description = this.data.description
        this.requirements = this.data.requirements
      }

      
    })
  }


}
