import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormfavorComponent } from './components/formfavor/formfavor.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormSellerComponent } from './components/form-seller/form-seller.component';
import { FormStockComponent } from './components/form-stock/form-stock.component';
import { FormDistributionComponent } from './components/form-distribution/form-distribution.component';
import { TableStockComponent } from './components/table-stock/table-stock.component';
import { TableSaleComponent } from './components/table-sale/table-sale.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { LoginComponent } from './log/login/login.component';
import { TableDistributionComponent } from './components/table-distribution/table-distribution.component';
import { SingUpComponent } from './log/sing-up/sing-up.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'singup', component: SingUpComponent},

  {path:'', component: LoginComponent},
  {path:'formflavor', component: FormfavorComponent},
  {path:'formproduct', component: FormProductComponent},
  {path:'formseller', component: FormSellerComponent},
  {path:'formStock', component: FormStockComponent},
  {path:'formdistribution', component: FormDistributionComponent},
  { path: 'formsale', component:FormSaleComponent },
  { path: 'tableStock', component:TableStockComponent },
  { path: 'tablesale', component:TableSaleComponent },
  { path: 'tableDistribution', component:TableDistributionComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
