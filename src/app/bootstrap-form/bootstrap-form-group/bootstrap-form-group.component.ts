import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-group',
  templateUrl: './bootstrap-form-group.component.html',
  styleUrls: ['./bootstrap-form-group.component.scss'],
  host: {'[class.form-group]': 'true'}
})
export class BootstrapFormGroupComponent implements OnInit {

  @Input() label: string

  constructor() { }

  ngOnInit() {
  }

}
