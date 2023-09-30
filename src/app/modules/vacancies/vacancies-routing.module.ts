import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';


const routes: Routes = [
  {
    path: '',
    component: VacancyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacanciesRoutingModule { }