import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapFormGroupComponent, BootstrapFormControlDirective } from './bootstrap-form-group/bootstrap-form-group.component';



@NgModule({
  declarations: [
    BootstrapFormGroupComponent,
    BootstrapFormControlDirective
  ],
  exports: [
    BootstrapFormGroupComponent,
    BootstrapFormControlDirective
  ],
  imports: [
    CommonModule
  ]
})
export class BootstrapFormModule { }
