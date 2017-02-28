/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckoutStep3Component } from './checkout-step3.component';

describe('CheckoutStep3Component', () => {
  let component: CheckoutStep3Component;
  let fixture: ComponentFixture<CheckoutStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
