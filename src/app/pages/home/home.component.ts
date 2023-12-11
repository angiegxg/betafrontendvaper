import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';
import * as FlavorSelectors from '../../state/selector/flavor.selectors';
import * as flavorActions from '../../state/actions/flavor.actions'
import * as productActions from '../../state/actions/product.actions'
import * as sellerActions from '../../state/actions/seller.actions'
import * as stockActions from '../../state/actions/stock.actions'
import * as saleActions from '../../state/actions/sale.actions'
import * as distributionActions from '../../state/actions/distribution.action'
import { CardComponent } from 'src/app/components/card/card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  
  constructor(private store: Store) {}
  

  ngOnInit(): void {
    console.log('Iniciando componente de inicio...');
    this.loadFlavors(); 
    this.loadProducts()
    this.loadSellers()
    this.loadStocks()
    this.loadSales()
    this.loadDistribution()
  }
  

  loadFlavors() {
    this.store.dispatch(flavorActions.loadFlavors());
  }

  loadProducts() {
    this.store.dispatch(productActions.loadProducts());
  }

  loadSellers() {
    console.log("estoy en loadSellers de home...")
    this.store.dispatch(sellerActions.loadSellers());
  }

  loadStocks() {
    console.log("estoy en loadStocks de home...")
    this.store.dispatch(stockActions.loadStocks());
  }

  loadSales() {
    console.log("estoy en loadSales de home...")
    this.store.dispatch(saleActions.loadSales());
  }
  loadDistribution() {
    console.log("estoy en loadDistribution de home...")
    this.store.dispatch(distributionActions.loadDistributions());
  }

  entity=["Flavor","Product","Seller","Stock","Distributions","Sales"]
  

}
