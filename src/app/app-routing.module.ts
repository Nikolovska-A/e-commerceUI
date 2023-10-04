import { NgModule } from '@angular/core';
import {CreditCardFormComponent} from "./credit-card-form/credit-card-form.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: 'credit-card',
    component: CreditCardFormComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



