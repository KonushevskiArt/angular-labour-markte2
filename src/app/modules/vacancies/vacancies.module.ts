import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies.component';
import { VacanciesService } from './services/vacancies.service';
import { VacancyComponent } from './components/vacancy/vacancy.component';

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
  exports: []
})
export class VacanciesModule { }
