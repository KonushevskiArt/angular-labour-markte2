import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AboutComponent } from './modules/about/about.component';
import { VacanciesPageComponent } from './modules/vacancies/pages/vacancies-page/vacancies.component';
import { VacancyPageComponent } from './modules/vacancies/pages/vacancy-page/vacancy-page.component';
import { SummariesPageComponent } from './modules/summaries/pages/summaries-page/summaries-page.component';
import { PersonalCabinetPageComponent } from './modules/personal-cabinet/pages/personal-cabinet-page/personal-cabinet-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'vacancies', pathMatch: 'full'},
  { path: 'vacancies', component: VacanciesPageComponent},
  { path: 'vacancies/:id', component: VacancyPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'summaries', component: SummariesPageComponent},
  { path: 'personal-cabinet', component: PersonalCabinetPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
