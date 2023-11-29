import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FlavorComponent } from './pages/flavor/flavor.component';
import { ProductComponent } from './pages/product/product.component';
import { SellerComponent } from './pages/seller/seller.component';
// import { FormComponent } from './components/form/form.component';

import { FormselectComponent } from './components/formselect/formselect.component';
import { FormfavorComponent } from './components/formfavor/formfavor.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormSellerComponent } from './components/form-seller/form-seller.component';
import { FormStockComponent } from './components/form-stock/form-stock.component';
import { FormDistributionComponent } from './components/form-distribution/form-distribution.component';
import { TableStockComponent } from './components/table-stock/table-stock.component';
import { TableSaleComponent } from './components/table-sale/table-sale.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  // { path: 'form/:entity', component: FormComponent},
 
  { path: 'formselect/:entity', component:FormselectComponent },

  {path:'flavor', component: FlavorComponent},
  {path:'product', component: ProductComponent},
  {path:'seller', component: SellerComponent},
  {path:'formflavor', component: FormfavorComponent},
  {path:'formproduct', component: FormProductComponent},
  {path:'formseller', component: FormSellerComponent},
  {path:'formStock', component: FormStockComponent},
  {path:'formdistribution', component: FormDistributionComponent},
  { path: 'formsale', component:FormSaleComponent },
  { path: 'tableStock', component:TableStockComponent },
  { path: 'tablesale', component:TableSaleComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
