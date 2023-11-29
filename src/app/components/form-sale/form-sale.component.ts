import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as FlavorSelectors from '../../state/selector/flavor.selectors'
import * as SellerSelectors from '../../state/selector/seller.selector'
import * as sellerActions from '../../state/actions/seller.actions'
import * as ProductSelectors from '../../state/selector/product.selector'
import types, { SelectOption } from 'src/app/models/interface.interface';
import { Observable } from 'rxjs';
import { GobackComponent } from '../goback/goback.component';

@Component({
  selector: 'app-form-sale',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GobackComponent],
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.scss']
})
export class FormSaleComponent {
  flavors$: Observable<types.Flavor[]>=this.store.select(FlavorSelectors.selectAllFlavors);
  product$:Observable<types.Product[]>=this.store.select(ProductSelectors.selectAllProduct)
  seller$:Observable<types.Seller[]>=this.store.select(SellerSelectors.selectAllSellers)
saleForm:FormGroup
flavorsOptions!:SelectOption[]
productOptions!:SelectOption[]
sellerOptions!:SelectOption[]

constructor(private fb: FormBuilder, private http: HttpClient, private store:Store) {
  this.saleForm = this.makeform(); // Inicializa flavorForm
}

ngOnInit(): void {
 
  this.flavors$.subscribe((flavors) => {
    this.flavorsOptions = flavors.map((flavor) => ({ id: flavor.id!, name: flavor.flavor }));
    console.log('Opciones de sabor:', this.flavorsOptions);
  })

  this.product$.subscribe((product) => {
    this.productOptions = product.map((product) => ({ id: product.id!, name: product.name}));
    console.log('Opciones de sabor:', this.productOptions);
  })

  
this.seller$.subscribe((seller) => {
  this.sellerOptions = seller.map((seller) => ({ id: seller.id!, name: seller.name }));
  console.log('Opciones de vendedor:', this.sellerOptions);
});

 

  
}


// {
//   "date": "2023-11-06T12:00:00",  // Inserta la fecha deseada en el formato correcto
//   "sellerId": 2,  // ID del vendedor
//   "total": 200,  // Monto total de la venta
//   "productsSold": [
//       {
//           "quantity": 1,
//           "productId": 1,  // ID del producto
//           "flavorId": 3,   // ID del sabor
//           "price": 15     // Precio del producto
//       }
     
//   ]
// }
makeform(): FormGroup {
  return this.fb.group({
   
    sellerId: ['', Validators.required],
    quantity:['', Validators.required], 
    productId: ['', Validators.required],
    flavorId:['', Validators.required], 
    price:['', Validators.required],  
    

    
     });


}

submitForm() {
  if (this.saleForm.valid) {
    const formData = this.saleForm.value;
// {
//   "date": "2023-11-06T12:00:00",  // Inserta la fecha deseada en el formato correcto
//   "sellerId": 2,  // ID del vendedor
//   "total": 200,  // Monto total de la venta
//   "productsSold": [
//       {
//           "quantity": 1,
//           "productId": 1,  // ID del producto
//           "flavorId": 3,   // ID del sabor
//           "price": 15     // Precio del producto
//       }
     
//   ]
// }

    
    

  const requestData = {
    sellerId: +formData.sellerId,  // ID del vendedor
    total: +formData.price * +formData.quantity,  // Monto total de la venta
    productsSold: [
           {
               quantity:+ formData.quantity,
               productId: +formData.productId,  // ID del producto
              flavorId: +formData.flavorId,   // ID del sabor
               price: +formData.price    // Precio del producto
           }
         
       ]
     }
  
  
  // [
  //   {
  //     fromStock: {
  //       productId: +formData.fromproductId,
  //       flavorId: +formData.fromflavorId,
  //       sellerId: +formData.fromsellerId
  //     },
  //     toStock: {
  //       productId: +formData.fromproductId,
  //       flavorId: +formData.fromflavorId,
  //       sellerId: +formData.toSellerId
  //     },
  //     quantity: +formData.quantity
  //   }
  // ];
  

    console.log(requestData)



    this.http.post('https://tukivaper.onrender.com/sale', requestData)
    .subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        alert(response);
      },
      (error) => {
        console.error('Error al enviar datos:', error);
        alert(error.message);
      }
    );
} else {
  alert('Por favor, complete el formulario correctamente.');
}


}



}
