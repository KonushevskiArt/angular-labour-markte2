import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { VacanciesModule } from './modules/vacancies/vacancies.module';
import { SummariesModule } from './modules/summaries/summaries.module';
import { PersonalCabinetModule } from './modules/personal-cabinet/personal-cabinet.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
    CoreModule,
    VacanciesModule,
    SummariesModule,
    PersonalCabinetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
