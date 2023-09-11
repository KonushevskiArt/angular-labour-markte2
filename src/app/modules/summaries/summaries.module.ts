import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './components/summary/summary.component';
import { SummariesPageComponent } from './pages/summaries-page/summaries-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { RouterModule } from '@angular/router';
import { CreateSummaryPageComponent } from './pages/create-summary-page/create-summary-page.component';
import { EditSummaryPageComponent } from './pages/edit-summary-page/edit-summary-page.component';



@NgModule({
  declarations: [
    SummaryComponent,
    SummariesPageComponent,
    SummaryPageComponent,
    CreateSummaryPageComponent,
    EditSummaryPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SummariesModule { }
