import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { AppToastsComponent } from './app-toasts/app-toasts.component';
import { AppToastsService } from './app-toasts/app-toasts.service';

@NgModule({
  declarations: [
    AppComponent,
    AppToastsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbToastModule
  ],
  providers: [AppToastsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
