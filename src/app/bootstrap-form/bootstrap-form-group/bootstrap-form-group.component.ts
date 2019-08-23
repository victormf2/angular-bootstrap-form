import { Component, OnInit, Input, Directive, Self, Host, Optional, SkipSelf, ElementRef } from '@angular/core';
import { NgForm, NgControl, NgModel } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy'

@Component({
  selector: 'form-group',
  templateUrl: './bootstrap-form-group.component.html',
  styleUrls: ['./bootstrap-form-group.component.scss'],
  host: {'[class.form-group]': 'true'}
})
export class BootstrapFormGroupComponent implements OnInit {

  @Input() label: string
  @Input() errorMessage: string = "Invalid field."

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '.form-control[ngModel]'
})
export class BootstrapFormControlDirective {

  constructor(
    @Optional() @Host() private form: NgForm,
    @Optional() @SkipSelf() @Host() private formGroup: BootstrapFormGroupComponent,
    @Optional() @Self() private model: NgModel,
    @Self() private element: ElementRef,
  ) {

  }

  ngOnInit() {
    if (this.form) {
      this.form.ngSubmit.pipe(
        untilDestroyed(this)
      ).subscribe(() => {
        this.element.nativeElement.classList.add('form-submitted')
      })
    }
  }

  ngOnDestroy(){}
}
