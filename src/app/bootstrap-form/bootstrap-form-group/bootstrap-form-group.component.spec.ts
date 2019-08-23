import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFormGroupComponent } from './bootstrap-form-group.component';

describe('BootstrapFormGroupComponent', () => {
  let component: BootstrapFormGroupComponent;
  let fixture: ComponentFixture<BootstrapFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
