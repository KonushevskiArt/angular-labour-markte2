import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCabinetPageComponent } from './pages/personal-cabinet-page/personal-cabinet-page.component';
import { ShortSummaryComponent } from './components/short-summary/short-summary.component';
import { ShortVacancyComponent } from './components/short-vacancy/short-vacancy.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PersonalCabinetPageComponent,
    ShortSummaryComponent,
    ShortVacancyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PersonalCabinetModule { }
