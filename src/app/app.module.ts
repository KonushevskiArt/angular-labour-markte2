import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { VacanciesModule } from './modules/vacancies/vacancies.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
    CoreModule,
    VacanciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
