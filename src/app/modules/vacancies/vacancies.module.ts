import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies.component';
import { VacanciesService } from './services/vacancies.service';


@NgModule({
  declarations: [
    VacancyComponent,
    VacancyPageComponent,
    VacanciesPageComponent
  ],
  providers: [
    VacanciesService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VacancyPageComponent,
    VacanciesPageComponent
  ]
})
export class VacanciesModule { }
