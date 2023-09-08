import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { VacancyModel } from './../../models/vacancy';

@Component({
  selector: 'app-vacancies-page',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss'],
})
export class  VacanciesPageComponent implements OnInit {
  constructor(private vacanciesService: VacanciesService) {}

  loading = true;

  vacancies: Promise<VacancyModel[]>;

  ngOnInit(): void {
    this.vacancies = Promise.resolve(() => 
      this.vacanciesService.getAll()
    )
    .then((data) => {
      setTimeout(() => {
        this.loading = false;       
      }, 1000)
      console.log(data());
      return data();
      
      // this.vacancies = data();
    });
  }
}
