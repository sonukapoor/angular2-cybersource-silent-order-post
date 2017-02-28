import { CheckoutService } from './../../services/checkout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-step1',
  templateUrl: './checkout-step1.component.html',
  styleUrls: ['./checkout-step1.component.css']
})
export class CheckoutStep1Component implements OnInit {

  public data: {};
  constructor(private checkoutService: CheckoutService, private router: Router) { }

  encryptData(formData, isValid): void {
    this.checkoutService.encrypt(formData)
      .subscribe(signature => {
        formData.signature = signature.hash;
        this.checkoutService.setPaymentInformation = formData
        this.router.navigate(['/payment']);
      });
  }

  ngOnInit(): void {
    this.data = this.checkoutService.initPayment();
  }
}