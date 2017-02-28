import { Routes, RouterModule } from '@angular/router';

import { CheckoutStep1Component } from './components/checkout-step1/checkout-step1.component';
import { CheckoutStep2Component } from './components/checkout-step2/checkout-step2.component';
import { CheckoutStep3Component } from './components/checkout-step3/checkout-step3.component';

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutStep1Component,
  },
  {
    path: 'payment',
    component: CheckoutStep2Component,
  },
  {
    path: 'thankyou',
    component: CheckoutStep3Component,
  },
  {
    path: '',
    redirectTo: '/checkout',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);