import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreditCardRequest} from "./models/credit-card-request";

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  private baseUrl = 'http://localhost:8080/v1/credit-card'; // Update the URL as per your backend API

  constructor(private http: HttpClient) {}

  validateCreditCard(creditCard: CreditCardRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/validate`, creditCard);
  }
}
