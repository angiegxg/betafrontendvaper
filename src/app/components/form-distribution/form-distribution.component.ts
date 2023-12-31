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
  selector: 'app-form-distribution',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GobackComponent],
  templateUrl: './form-distribution.component.html',
  styleUrls: ['./form-distribution.component.scss']
})
export class FormDistributionComponent {
  
  flavors$: Observable<types.Flavor[]>=this.store.select(FlavorSelectors.selectAllFlavors);
  product$:Observable<types.Product[]>=this.store.select(ProductSelectors.selectAllProduct)
  seller$:Observable<types.Seller[]>=this.store.select(SellerSelectors.selectAllSellers)
DistributionForm!:FormGroup
flavorsOptions!:SelectOption[]
productOptions!:SelectOption[]
sellerOptions!:SelectOption[]


constructor(private fb: FormBuilder, private http: HttpClient, private store:Store) {
  this.DistributionForm = this.makeform(); // Inicializa flavorForm
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

// 

makeform(): FormGroup {
  return this.fb.group({
    fromproductId: ['', Validators.required],
    fromflavorId:['', Validators.required],
    fromsellerId:['', Validators.required],
    toSellerId: ['', Validators.required],
    quantity:['', Validators.required],  
    
     });


}

submitForm() {
  if (this.DistributionForm.valid) {
    const formData = this.DistributionForm.value;

    


  

    const requestData = 
    {
      distribution:
      [
        {
          sentFromStock: {
            productId: +formData.fromproductId,
            flavorId: +formData.fromflavorId,
            sellerId: +formData.fromsellerId
          },
          receivedAtStock: {
            productId: +formData.fromproductId,  // Usa toProductId en lugar de fromproductId
            flavorId: +formData.fromflavorId,    // Usa toFlavorId en lugar de fromflavorId
            sellerId: +formData.toSellerId
          },
          quantity: +formData.quantity
        }
      ],
      userId: +localStorage.getItem('id')!
    };
  
  

    console.log(requestData)



    this.http.post(environment.apiUrl+'distribution', requestData)
    .subscribe(
      (response) => {
        console.log('distribucion realizada correctamente:', response);
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
