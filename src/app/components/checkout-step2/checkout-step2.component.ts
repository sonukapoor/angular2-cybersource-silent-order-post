import { CheckoutService } from './../../services/checkout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-step2',
  templateUrl: './checkout-step2.component.html',
  styleUrls: ['./checkout-step2.component.css']
})
export class CheckoutStep2Component implements OnInit {

  public data: {};
  public controls;
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.data = this.checkoutService.getPaymentInformation;
    this.controls = Object.keys(this.data).map((k) => {
      return { key: k, value: this.data[k] };
    });
  }
}
