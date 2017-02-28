import { Payment } from './../models/payment';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { UUID } from 'angular2-uuid';

@Injectable()
export class CheckoutService {
  private baseUrl: string = 'http://localhost:3000/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private payment: Payment;

  constructor(private http: Http) { }

  set setPaymentInformation(payment) {
    this.payment = payment;
  }

  get getPaymentInformation() {
    return this.payment;
  }

  initPayment(): Payment {
    let signedFieldNames = "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code";
    let payment: Payment = {
      access_key: "c959076e62ee39db9a32317015d1fad8",
      profile_id: "D23DA54D-D116-47D6-8D21-1051C7DA2F96",
      signed_field_names: signedFieldNames,
      unsigned_field_names: "card_type,card_number,card_expiry_date",
      locale: "en",
      transaction_uuid: UUID.UUID(),
      signed_date_time: this.getUTCDate(), //"2017-02-28T14:38:33Z",
      transaction_type: "authorization",
      reference_number: Math.floor((Math.random() * 10000) + 1).toString(),
      amount: "100.00",
      currency: "USD",
      payment_method: "card",
      bill_to_forename: "John",
      bill_to_surname: "Doe",
      bill_to_email: "null@cybersource.com",
      bill_to_phone: "02890888888",
      bill_to_address_line1: "1 Card Lane",
      bill_to_address_city: "My City",
      bill_to_address_state: "CA",
      bill_to_address_country: "US",
      bill_to_address_postal_code: "94043",
      card_type: "001",
      card_number: "4242424242424242",
      card_expiry_date: "11-2020",
      signature: "",
    };

    return payment;
  }

  encrypt(form): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/sign`, JSON.stringify(form), { headers: this.headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  private getUTCDate(): string {
    var now = new Date();
    var now_utc = now.getUTCFullYear() + "-" + this.appendZero(now.getUTCMonth()+1) + "-" + this.appendZero(now.getUTCDate()) + "T" + this.appendZero(now.getUTCHours()) + ":" + this.appendZero(now.getUTCMinutes()) + ":" + this.appendZero(now.getUTCSeconds()) + "Z";
    return now_utc;
  }

  private appendZero(digit): string {
    if (digit < 10)
      return "0" + digit;
    else
      return digit;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get  a better message
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
