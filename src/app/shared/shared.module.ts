import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { Spinner1Component } from './components/button-spinner/spinner1.component';
import { ToastComponent } from './components/toast/toast/toast.component';


@NgModule({
  declarations: [
    ModalComponent,
    Spinner1Component,
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    Spinner1Component
  ]
})
export class SharedModule { }
