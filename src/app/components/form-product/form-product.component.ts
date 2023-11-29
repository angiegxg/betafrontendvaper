import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as FlavorSelectors from '../../state/selector/flavor.selectors'
import * as SellerSelectors from '../../state/selector/seller.selector'
import * as sellerActions from '../../state/actions/seller.actions'
import * as ProductSelectors from '../../state/selector/product.selector'
import types, { FieldConfig } from 'src/app/models/interface.interface';
import { Observable } from 'rxjs';
import { GobackComponent } from '../goback/goback.component';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GobackComponent],
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent  {
  productForm: FormGroup;
  checkboxForm!: FormGroup;
  entity: string = "product";
  flavors$: Observable<types.Flavor[]> = this.store.select(FlavorSelectors.selectAllFlavors);

  public field: FieldConfig = {
    "product": [
      { name: "product", type: "input", options: [] },
      { name: "description", type: "input", options: [] },
      { name: "img", type: "input", options: [] },
      { name: "price", type: "input" },
      { name: "flavor", type: "select", options: [] },
      
    ],
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private store: Store) {
    this.productForm = this.makeform();
  }

  ngOnInit(): void {
    for (let input of this.field[this.entity]) {
      if (input.name === "flavor") {
        this.flavors$.subscribe((flavors) => {
          input.options = flavors.map((flavor) => ({ id: flavor.id!, name: flavor.flavor })) || [];
          
          console.log('Opciones de sabor:', input.options);
        });
      }
    }
  }

  makeform(): FormGroup {
    

    return this.fb.group({
      product: ['', Validators.required],
      price: ['', Validators.required],
      img: ['', Validators.required],
      description: ['', Validators.required],
      flavorIds: [[], Validators.required],
    });
  }
  onFlavorIdsChange(selectedIds: number[]): void {
    // Handle the selected flavor IDs here
    console.log('Selected Flavor IDs:', selectedIds);
  }

  submitForm() {
    if (this.productForm.valid ) {
      const formData = this.productForm.value;

      // Obtén la información del producto desde el formulario
      const requestData = {
        product: {
          name: formData.product,
          description: formData.description,
          img: formData.img,
          cost: +formData.price,
        },
        flavorIds: formData.flavorIds
      }
      
      console.log(requestData)
      
      // {
      //   product: {
      //     name: formData.product,
      //     description:formData.description ,
      //     img: formData.img,
      //     cost: +formData.price,
      //   }
        
      // }
      
      
      // {
      //   name: formData.product,
      //   description: formData.description,
      //   img: formData.img,
      //   cost: formData.price,
      // };

      // Obtén los sabores seleccionados
      

      // Construye el objeto requestData con la sintaxis deseada
     

      this.http.post('https://tukivaper.onrender.com/product', requestData)
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
