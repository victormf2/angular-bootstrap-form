import { Component, Directive, ElementRef, Host, Input, OnInit, Optional, Self, SkipSelf, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { EMPTY, merge, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: 'form'
})
export class BootstrapFormDirective implements OnInit {

  @Output() validSubmit = new EventEmitter<Event>()

  constructor(
    @Optional() @Self() private form: NgForm,
  ) {

  }

  ngOnInit(): void {
    if (!this.form) {
      return
    }
    this.form.ngSubmit.pipe(
      filter(() => this.form.valid)
    ).subscribe(this.validSubmit)
  }

}

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
    @Self() private elementRef: ElementRef,
  ) {

  }

  get element(): HTMLElement {
    return this.elementRef.nativeElement
  }

  get submit$(): Observable<Event> {
    return this.form ? this.form.ngSubmit.pipe(untilDestroyed(this)) : EMPTY
  }

  ngOnInit() {
    this.submit$.subscribe(() => {
      this.element.classList.add('form-submitted')
    })

    if (this.model) {
      merge(
        this.submit$,
        this.model.statusChanges.pipe(
          filter(status => status === "INVALID")
        )
      ).pipe(
        filter(() => !!this.model.errors)
      ).subscribe(() => {
        const errorKey = Object.keys(this.model.errors)[0]
        const errorValue = this.model.errors[errorKey]
        const label = this.getLabel()
        const errorMessage = defaultErrorMessages[errorKey](label, errorValue)
        this.setErrorMessage(errorMessage)
      })
    }
  }

  ngOnDestroy(){}

  getLabel(): string {
    const formGroupLabel = this.formGroup && this.formGroup.label
    if (formGroupLabel) {
      return formGroupLabel
    }
    const labelElement = this.getLabelElement()
    if (labelElement) {
      return labelElement.textContent
    }
    return this.element.getAttribute("name")
  }

  getLabelElement(): Element {
    let sibling: Element = this.element
    while(sibling.previousElementSibling) {
      sibling = sibling.previousElementSibling
      if (sibling.tagName === 'label') {
        return sibling
      }
    }
    return null
  }

  setErrorMessage(errorMessage: string) {
    if (this.formGroup) {
      this.formGroup.errorMessage = errorMessage
    } else {
      const errorMessageElement = this.getErrorMessageElement()
      if (errorMessageElement) {
        errorMessageElement.textContent = errorMessage
      }
    }
  }

  getErrorMessageElement(): Element {
    let sibling: Element = this.element
    while(sibling.nextElementSibling) {
      sibling = sibling.nextElementSibling
      if (sibling.classList.contains('invalid-feedback')) {
        return sibling
      }
    }
    return null
  }
}

const defaultErrorMessages = {
  required: (label) => `This field is required.`,
  email: (label) => `This field must be a valid email address.`,
  minlength: (label, {requiredLength, actualLength}) => `${label} length is ${actualLength} but must be at least ${requiredLength}`,
}
