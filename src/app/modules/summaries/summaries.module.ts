import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './components/summary/summary.component';
import { SummariesPageComponent } from './pages/summaries-page/summaries-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SummaryComponent,
    SummariesPageComponent,
    SummaryPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SummariesModule { }
