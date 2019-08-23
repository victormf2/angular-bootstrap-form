import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapFormGroupComponent, BootstrapFormControlDirective, BootstrapFormDirective } from './bootstrap-form-group/bootstrap-form-group.component';



@NgModule({
  declarations: [
    BootstrapFormGroupComponent,
    BootstrapFormControlDirective,
    BootstrapFormDirective
  ],
  exports: [
    BootstrapFormGroupComponent,
    BootstrapFormControlDirective,
    BootstrapFormDirective
  ],
  imports: [
    CommonModule
  ]
})
export class BootstrapFormModule { }
