import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from '../modules/about/about.component';
import { VacanciesComponent } from '../modules/vacancies/vacancies.component';
import { SummariesComponent } from '../modules/summaries/summaries.component';
import { ProfileComponent } from '../modules/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: VacanciesComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'summaries', component: SummariesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
