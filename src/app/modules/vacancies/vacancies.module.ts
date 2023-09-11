import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies.component';
import { VacanciesService } from './services/vacancies.service';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { RouterModule } from '@angular/router';
import { CreateVacancyPageComponent } from './pages/create-vacancy-page/create-vacancy-page.component';
import { EditVacancyPageComponent } from './pages/edit-vacancy-page/edit-vacancy-page.component';

@NgModule({
  declarations: [
    VacancyComponent,
    VacancyPageComponent,
    VacanciesPageComponent,
    CreateVacancyPageComponent,
    EditVacancyPageComponent
  ],
  providers: [
    VacanciesService
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class VacanciesModule { }
