import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step2Guard } from 'src/libs/guards/step2.guard';
import { Step3Guard } from 'src/libs/guards/step3.guard';

import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { CreateCustomerstp1Component } from '../createStep/create-customerstp1/create-customerstp1.component';
import { CreateCustomerstp2Component } from '../createStep/create-customerstp2/create-customerstp2.component';
import { CreateCustomerstp3Component } from '../createStep/create-customerstp3/create-customerstp3.component';
import { CustomersComponent } from './customers.component';



const routes: Routes = [{
  path: "",
  component: CustomersComponent,

},
{
  path: "createCustomer",
  component: CreateCustomerComponent,
},
{
  path:"stp1",
  component:CreateCustomerstp1Component,

  
},
{
  path:"stp2",
  component:CreateCustomerstp2Component,
  canActivate:[Step2Guard]
 
},
{
  path:"stp3",
  component:CreateCustomerstp3Component,
  canActivate:[Step3Guard]
}

// {
//   path: "**",
//   redirectTo: "/customers",
//   pathMatch: "full"
// }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }


