import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldConfig } from 'src/app/models/interface.interface';
import { SelectComponent } from '../select/select.component';
import { CheckboxListComponent } from '../checkbox-list/checkbox-list.component';
import { Store, select } from '@ngrx/store';
import * as FlavorSelectors from '../../state/selector/flavor.selectors'
import * as SellerSelectors from '../../state/selector/seller.selector'
import * as sellerActions from '../../state/actions/seller.actions'
import * as ProductSelectors from '../../state/selector/product.selector'
import types from 'src/app/models/interface.interface';
import { SelectControlService } from 'src/app/services/select-control.service';
import { CheckboxControlService } from 'src/app/services/checkbox-control.service';
import { FormProductSoldComponent } from '../form-product-sold/form-product-sold.component';

@Component({
  selector: 'app-formselect',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SelectComponent, CheckboxListComponent, FormProductSoldComponent],
  templateUrl: './formselect.component.html',
  styleUrls: ['./formselect.component.scss']
})
export class FormselectComponent {
  flavors$: Observable<types.Flavor[]>=this.store.select(FlavorSelectors.selectAllFlavors);
  product$:Observable<types.Product[]>=this.store.select(ProductSelectors.selectAllProduct)
  seller$:Observable<types.Seller[]>=this.store.select(SellerSelectors.selectAllSellers)
  form: FormGroup;
  myFormControl = new FormControl()
  selectedOptionValue:  | undefined;
  public field: FieldConfig = {
    "flavor": [{ name: "flavor", type: "input" }],
    "product": [
      { name: "quantity", type: "input" },
      { name: "product", type: "input", options: [] },
      { name: "flavor", type: "checkbox", options: [] },
      { name: "price", type: "input" },
    ],
    "seller": [
      { name: "name", type: "input", options: [] },
      { name: "commission", type: "input", options: [] },
    ],
    "sales": [
      { name: "seller", type: "select", options: [] },
      { name: "quantity", type: "input", options: [] },
      { name: "stock", type: "stock", options: [] },      
      { name: "total", type: "input" },
    ],
    "productDetail": [
      { name: "quantity", type: "input", options: [] },
      { name: "productId", type: "input", options: [] },
      { name: "flavorId", type: "input", options: [] },
      { name: "price", type: "input", options: [] },
      { name: "saleId", type: "input", options: [] },
    ],
    "stock": [
      { name: "product", type: "select", options: [] },
      { name: "flavor", type: "select", options: [] },
      { name: "quantity", type: "input", options: [] },
      { name: "seller", type: "select", options: [] },
    ],
    "distributions": [    
      { name: "seller", type: "select", options: [] },  
      { name: "fromStock", type: "stock", options: [] },
      { name: "quantity", type: "input", options: [] },
      { name: "to seller", type: "input", options: [] },      
      { name: "product", type: "select", options: [] },
      { name: "flavor", type: "select", options: [] }
    ],
  };
  entity!: string;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private store:Store, 
    private router:Router,
    private selectService: SelectControlService,
    private checkboxListService: CheckboxControlService) {
    this.form = this.fb.group({
      quantity: [''],
      product: [''],
      flavor: this.checkboxListService.createCheckboxListControl(),
      price: [''],
      name: [''],
      commission: [''],
      seller: this.selectService.createSelectControl(),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.entity = params['entity'].toLowerCase();
    });
    console.log('Campo actual:', this.field[this.entity]);

   for (let input of this.field[this.entity]) {
 
    if (input.type === "select" && input.name === "flavor" ||input.type === "checkbox" && input.name === "flavor") {
      this.flavors$.subscribe((flavors) => {
        input.options = flavors.map((flavor) => ({ id: flavor.id!, name: flavor.flavor }));
        console.log('Opciones de sabor:', input.options);
      });
    }
    
    if (input.type === "select" && input.name === "product") {
      this.product$.subscribe((products) => {
        input.options = products.map((product) => ({ id: product.id!, name: product.name }));
        console.log('Opciones de producto:', input.options);
      });
    }

    if (input.type === "select" && input.name === "seller") {
      this.seller$.subscribe((sellers) => {
        input.options = sellers.map((seller) => ({ id: seller.id!, name: seller.name }));
        console.log('Opciones de producto:', input.options);
      });
    }

    
}
  
    // if (this.field[this.entity].type === 'select' &&) {
    //   this.flavors$.subscribe((flavors) => {
    //     this.field[this.entity].options = flavors.map((flavor) => flavor.flavor);
    //     console.log(this.field[this.entity].options);
    //   });
    // }
  }

  onSubmit() {
    switch(this.entity) {
      case "flavor": const flavorData = this.form.value; // Obtener los datos del formulario
      console.log('Datos del formulario para flavor:', flavorData);

      // Aquí deberías llamar a tu servicio o acción de Ngrx para guardar los datos en el backend
      // Ejemplo:
      // this.store.dispatch(flavorActions.createFlavor({ flavorData }));

      break;
    
  }
}

  handleSelectChange(value: string): void {
    console.log('Valor seleccionado en el componente padre:', value);
    this.selectService.setSelectedValue(value)
  }
  onFlavorIdsChange(flavorIds: number[]): void {
    console.log('Selected Flavor IDs:', flavorIds);
  }

//   handleActionClick() {
//     console.log("estoy en handleActionClick",this.entity)
//     debugger
//     this.router.navigate(['formproductsold']);
//     this.store.dispatch(sellerActions.loadSellerByIdSuccess())
// }
}

