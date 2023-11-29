import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { filter, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as SellerSelectors from '../../state/selector/seller.selector';
import * as SellerActions from '../../state/actions/seller.actions';
import { SelectControlService } from 'src/app/services/select-control.service';
import { SelectOption } from 'src/app/models/interface.interface';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-form-product-sold',
  standalone: true,
  imports: [CommonModule,SelectComponent],
  templateUrl: './form-product-sold.component.html',
  styleUrls: ['./form-product-sold.component.scss']
})
export class FormProductSoldComponent implements OnInit {
  public selectedValue: any;
  searchid!: number;
  options: SelectOption[]=[]
  x:any
  selectedSeller$ = this.store.select(SellerSelectors.selectSelectedSellerId);
  

  constructor(private store: Store, private selectoption: SelectControlService) {}

  ngOnInit(): void {
    this.selectoption.selectedValue$
      .pipe(
        distinctUntilChanged(),
        )
       .subscribe((value) => { 
        if (value !== undefined) {
          // Realizar la acción solo si el valor no es undefined
          console.log("esto deberia imprimir solo si el valor del select es diferente de undifanadsfaj")
          this.store.dispatch(SellerActions.loadSellerById({ id: +value }));
         
        }

        this.selectedSeller$
  .pipe(
    filter(seller => seller !== undefined && seller !== null),
    distinctUntilChanged()
  )
  .subscribe((seller) => {
    console.log("Estoy en la subscripción de selectedSeller", seller);
    
   
      this.x = seller;
      
      this.x[0].stock.map((stock: any) => {
        console.log(stock);
        console.log(stock.product.product.name);
        console.log(stock.product.flavor.flavor);
        this.makeoptions(stock.id, stock.product.product.name, stock.product.flavor.flavor);
      });
    
  });


   

    
    

    
  });
        

  
}

makeoptions(id:number,product:string,flavor:string){
  this.options.push({id, name:product+"de"+flavor})
  console.log("estoy en la funcion que crea las opciones",this.options)
}
}




