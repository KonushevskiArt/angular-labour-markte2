import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { SummariesComponent } from '../modules/summaries/summaries.component';
import { VacanciesComponent } from '../modules/vacancies/vacancies.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './header/components/navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ThemeSwitcherComponent } from './header/components/theme-switcher/theme-switcher.component';
import { LanguageSwitcherComponent } from './header/components/language-switcher/language-switcher.component';
// import { ModalComponent } from './modal/modal.component';
import { AuthModule } from '../modules/auth/auth.module';

@NgModule({
  declarations: [
    // ModalComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NotFoundComponent,
    SummariesComponent,
    VacanciesComponent,
    ProfileComponent,
    ThemeSwitcherComponent,
    LanguageSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AuthModule
  ],
  exports: [
    LayoutComponent,
    // ModalComponent
  ]
})
export class CoreModule { }
