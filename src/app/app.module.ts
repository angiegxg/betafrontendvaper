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
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { sellerReducer } from './state/reducers/seller.reducer';
import { SellerEffects } from './state/effects/seller.effects';
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
import { LoginComponent } from './log/login/login.component';
import { LoginServiceService } from './log/login/login.service.service';
import { TableDistributionComponent } from './components/table-distribution/table-distribution.component';
import { DistributionReducer } from './state/reducers/distribution.reducer';
import { DistributionEffects } from './state/effects/distribution.effect';
import { SingUpComponent } from './log/sing-up/sing-up.component';
import { SingUpServiceService } from './log/sing-up/sing-up-service.service';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
   
  
   
  ],
  imports: [
    
    BrowserModule,
    LoginComponent,
    SingUpComponent,
    FormStockComponent,
    TableDistributionComponent,
    GobackComponent,
    FormDistributionComponent,
    TableStockComponent,
    FormSellerComponent,
    FormProductComponent,
   
    FormfavorComponent,
    FormSaleComponent,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
   TableSaleComponent,
    TableSaleComponent,
    HomeComponent,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([FlavorEffects, ProductEffects, SellerEffects, StockEffects,SaleEffects, DistributionEffects]),
    StoreModule.forFeature('flavors',flavorReducer),
    StoreModule.forFeature('products',ProductReducer),
    StoreModule.forFeature('sellers',sellerReducer),
    StoreModule.forFeature('stocks',StockReducer),
    StoreModule.forFeature('sales',SaleReducer),
    StoreModule.forFeature('distributions',DistributionReducer)
   
  ],
  providers: [SelectControlService, LoginServiceService,SingUpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
