import { NgModule } from '@angular/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogOutComponent } from './components/log-out/log-out.component';



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    LogOutComponent, 
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    LogInComponent,
    SignUpComponent,
    LogOutComponent, 
  ]
})
export class AuthModule { }
