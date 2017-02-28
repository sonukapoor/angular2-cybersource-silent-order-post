import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routes';

import { CheckoutService } from './services/checkout.service';
import { CheckoutStep3Component } from './components/checkout-step3/checkout-step3.component';
import { CheckoutStep2Component } from './components/checkout-step2/checkout-step2.component';
import { CheckoutStep1Component } from './components/checkout-step1/checkout-step1.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutStep1Component,
    CheckoutStep2Component,
    CheckoutStep3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing, 
  ],
  providers: [CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
