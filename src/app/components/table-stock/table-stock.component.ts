import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';


import types from 'src/app/models/interface.interface';
import * as StockSelectors from '../../state/selector/stock.selectors'
import { Observable } from 'rxjs';
import { GobackComponent } from '../goback/goback.component';

@Component({
  selector: 'app-table-stock',
  standalone: true,
  imports: [CommonModule, GobackComponent],
  templateUrl: './table-stock.component.html',
  styleUrls: ['./table-stock.component.scss']
})
export class TableStockComponent {
  stock$: Observable<types.Stock[]>=this.store.select(StockSelectors.selectAllStock);
 header:string[]=["Id","Product","Flavor","Qty", "Seller"]
 files: { id: number | undefined; product: string | undefined; flavor: string | undefined; seller: string | undefined; quantity: number| undefined; }[] = [];

  constructor(private store:Store) {
   
  }
  // {
  //   "id": 2,
  //   "productId": 1,
  //   "flavorId": 3,
  //   "quantity": 11,
  //   "sellerId": 2,
  //   "seller": {
  //       "id": 2,
  //       "name": "miguel",
  //       "commission": 1.5
  //   }

  ngOnInit(): void {
 
   
    
  this.stock$.subscribe((stock) => {
    this.files = stock.map((item) => ({
      id: item.id,
      product: item?.product?.product?.name,
      flavor: item.product?.flavor?.flavor,
      seller: item.seller?.name,
      quantity: item.quantity
    }));
    console.log('Opciones de vendedor:', this.files);
  });
  

  
  
  console.log(this.files);
   
  




  
    
  }

}



