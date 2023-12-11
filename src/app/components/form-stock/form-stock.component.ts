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
import { environment } from 'src/app/environments/environments';

@Component({
  selector: 'app-form-stock',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GobackComponent],
  templateUrl: './form-stock.component.html',
  styleUrls: ['./form-stock.component.scss']
})
export class FormStockComponent {

  flavors$: Observable<types.Flavor[]>=this.store.select(FlavorSelectors.selectAllFlavors);
  product$:Observable<types.Product[]>=this.store.select(ProductSelectors.selectAllProduct)
  seller$:Observable<types.Seller[]>=this.store.select(SellerSelectors.selectAllSellers)
stockForm!:FormGroup

flavorsOptions!:SelectOption[]
productOptions!:SelectOption[]
sellerOptions!:SelectOption[]
constructor(private fb: FormBuilder, private http: HttpClient, private store:Store) {
  this.stockForm = this.makeform(); // Inicializa flavorForm
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

makeform(): FormGroup {
  return this.fb.group({
    productId: ['', Validators.required],
    flavorId:['', Validators.required],
    quantity:['', Validators.required],  
    sellerId:['', Validators.required],
     });


}

submitForm() {
  if (this.stockForm.valid) {
    const formData = this.stockForm.value;

    console.log('Datos enviados:', formData);

  //   {
  //     "productId": 1, 
  //     "flavorId":3,
  //     "quantity":100,   
  //     "sellerId":1
  // }

    const requestData = {
      stock:{
        productId:+formData.productId,
        flavorId:+formData.flavorId,
        quantity:+formData.quantity,
        sellerId:+formData.sellerId

      },
      userId:+localStorage.getItem('id')!

    };

   

    console.log(requestData)



    this.http.post(environment.apiUrl+'stock', requestData)
    .subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        const responseString = JSON.stringify(response, null, 2)
            alert(responseString);
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

