import { Component, OnInit } from '@angular/core';
import { AppToastsService } from './app-toasts.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './app-toasts.component.html',
  styleUrls: ['./app-toasts.component.scss'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class AppToastsComponent implements OnInit {

  constructor(public toastsService: AppToastsService) { }

  ngOnInit() {
  }

}
