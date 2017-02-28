/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckoutStep2Component } from './checkout-step2.component';

describe('CheckoutStep2Component', () => {
  let component: CheckoutStep2Component;
  let fixture: ComponentFixture<CheckoutStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
