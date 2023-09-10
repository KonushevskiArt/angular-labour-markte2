import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AboutComponent } from './modules/about/about.component';
import { VacanciesPageComponent } from './modules/vacancies/pages/vacancies-page/vacancies.component';
import { VacancyPageComponent } from './modules/vacancies/pages/vacancy-page/vacancy-page.component';
import { SummariesPageComponent } from './modules/summaries/pages/summaries-page/summaries-page.component';
import { PersonalCabinetPageComponent } from './modules/personal-cabinet/pages/personal-cabinet-page/personal-cabinet-page.component';
import { SummaryPageComponent } from './modules/summaries/pages/summary-page/summary-page.component';
import { CreateVacancyPageComponent } from './modules/vacancies/pages/create-vacancy-page/create-vacancy-page.component';
import { CreateSummaryPageComponent } from './modules/summaries/pages/create-summary-page/create-summary-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'vacancies', pathMatch: 'full'},
  { path: 'vacancies', component: VacanciesPageComponent},
  { path: 'vacancies/create', component: CreateVacancyPageComponent, pathMatch: 'full'},
  { path: 'vacancies/:id', component: VacancyPageComponent},
  { path: 'summaries', component: SummariesPageComponent},
  { path: 'summaries/create', component: CreateSummaryPageComponent, pathMatch: 'full'},
  { path: 'summaries/:id', component: SummaryPageComponent},
  { path: 'personal-cabinet', component: PersonalCabinetPageComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
