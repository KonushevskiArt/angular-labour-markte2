import { NgModule } from '@angular/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent, 
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    LogInComponent,
    SignUpComponent,
  ]
})
export class AuthModule { }
