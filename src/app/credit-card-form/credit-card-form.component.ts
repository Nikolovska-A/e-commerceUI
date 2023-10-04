import {Component} from '@angular/core';
import {CreditCardService} from "../credit-card.service";

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent {

  creditCard: any = {};
  isSuccess = false;
  isFailure = false;
  message = '';

  isFormSubmitted = false;

  constructor(private creditCardService: CreditCardService) {
  }

  onSubmit() {
    this.isFormSubmitted = true;

    this.creditCardService.validateCreditCard(this.creditCard).subscribe(
      (response) => {
        console.log(response.message);
        const isBackendSuccess = true;

        if (isBackendSuccess) {
          this.creditCard.holderName = '';
          this.creditCard.cardNumber = '';
          this.creditCard.expiryMonth = '';
          this.creditCard.expiryYear = '';
          this.creditCard.cvv = '';

          this.isSuccess = true;
          this.isFailure = false;
          this.message = response['message'];

        }
      },
      (error) => {
        this.isSuccess = false;
        this.isFailure = true;
        this.message = error.error['message'];
      }
    );

  }
}
