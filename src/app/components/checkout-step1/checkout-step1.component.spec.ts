/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckoutStep1Component } from './checkout-step1.component';

describe('CheckoutStep1Component', () => {
  let component: CheckoutStep1Component;
  let fixture: ComponentFixture<CheckoutStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
