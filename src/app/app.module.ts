import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './pages/home/home.component';
import { EffectsModule } from '@ngrx/effects';

import { FlavorEffects } from './state/effects/flavor.effects';

import { flavorReducer } from './state/reducers/flavor.reducer';
import { HttpClientModule } from '@angular/common/http';
import { ProductEffects } from './state/effects/product.effects';
import { ProductReducer } from './state/reducers/product.reducer';
import { FlavorComponent } from './pages/flavor/flavor.component';
import { ProductComponent } from './pages/product/product.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SelectComponent } from './components/select/select.component';
import { FormselectComponent } from './components/formselect/formselect.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';
import { sellerReducer } from './state/reducers/seller.reducer';
import { SellerEffects } from './state/effects/seller.effects';
import { FormProductSoldComponent } from './components/form-product-sold/form-product-sold.component';
import { SelectControlService } from './services/select-control.service';
import { FormfavorComponent } from './components/formfavor/formfavor.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormSellerComponent } from './components/form-seller/form-seller.component';
import { FormStockComponent } from './components/form-stock/form-stock.component';
import { FormDistributionComponent } from './components/form-distribution/form-distribution.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { TableStockComponent } from './components/table-stock/table-stock.component';
import { StockReducer } from './state/reducers/stock.reducer';
import { StockEffects } from './state/effects/stock.effects';
import { TableSaleComponent } from './components/table-sale/table-sale.component';
import { SaleEffects } from './state/effects/sale.effects';
import { SaleReducer } from './state/reducers/sale.reducer';
import { GobackComponent } from './components/goback/goback.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    FormStockComponent,
    GobackComponent,
    FormDistributionComponent,
    TableStockComponent,
    FormSellerComponent,
    FormProductComponent,
    FormProductSoldComponent,
    FormfavorComponent,
    FormSaleComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectComponent,
    FormProductSoldComponent,
    CardComponent,
   TableSaleComponent,
    CheckboxListComponent,
    FormselectComponent,
    TableSaleComponent,
    HomeComponent,
    FlavorComponent,
    ProductComponent,
    SellerComponent,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([FlavorEffects, ProductEffects, SellerEffects, StockEffects,SaleEffects]),
    StoreModule.forFeature('flavors',flavorReducer),
    StoreModule.forFeature('products',ProductReducer),
    StoreModule.forFeature('sellers',sellerReducer),
    StoreModule.forFeature('stocks',StockReducer),
    StoreModule.forFeature('sales',SaleReducer)
   
  ],
  providers: [SelectControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
