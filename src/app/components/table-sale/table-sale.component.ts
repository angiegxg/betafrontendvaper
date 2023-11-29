import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';

import types from 'src/app/models/interface.interface';
import * as SaleSelectors from '../../state/selector/sale.selector'
import { Observable } from 'rxjs';
import { GobackComponent } from '../goback/goback.component';

@Component({
  selector: 'app-table-sale',
  standalone: true,
  imports: [CommonModule, GobackComponent],
  templateUrl: './table-sale.component.html',
  styleUrls: ['./table-sale.component.scss']
})
export class TableSaleComponent {
  sales$: Observable<types.Sale[]> = this.store.select(SaleSelectors.selectAllSales);
  header: string[] = ["Id", "Product", "Flavor", "Seller", "Quantity", "subtotal"];
  files: any[] = [];
  totalSales:number=0

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.sales$.subscribe((stock) => {
      this.files = stock.map((sale: any) => {
        const productsSold: any[] = sale.productsSold.map((productSold: any) => {
          const quantity: number = productSold.quantity;
          let totalSales:number=0
          const price: number = productSold.price;
          const subtotal: number = (quantity * price)-(sale.seller.commission *quantity);
          this.totalSales += subtotal
          

          return {
            product: productSold.product.product.name,
            flavor: productSold.product.flavor.flavor,
            quantity,
            price,
            subtotal,
           
          };
        });

        const total: number = productsSold.reduce((acc: number, product: any) => acc + product.subtotal, 0);
        const saleDate: Date = new Date(sale.date);
const formattedDate = `${saleDate.getDate()}-${saleDate.getMonth() + 1}-${saleDate.getFullYear()}`;

       
        
        return {
          id: sale.id,
          date: formattedDate,
          seller: sale.seller.name,
          productsSold,
          total,
          
        };
      });

      // Mostrar el resultado
      console.log(this.files);
    });
  }




}
