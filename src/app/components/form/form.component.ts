//Este es la version 1
//  import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, FormsModule],
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss']
// })
// export class FormComponent {

 

 
//   form: FormGroup;
//   field: Record<string, string[]> = {
//     "flavor": ["flavor"],
//     "product": ["name", "description", "img", "cost"],
//     "seller": ["name", "commission"],
//     "sales":[ "date","productsSold","sellerId:number","total"],
//     "productDetail":["quantity","productId","flavorId","price","saleId"],
//     "stock":["productId","flavorId", "quantity","sellerId"],
//     "distributions":["quantity","fromStockId","fromStockId","toStockId"]   
      
//   }
//   entity!: string;

//   constructor(private fb: FormBuilder, private route: ActivatedRoute) {
//     this.form = this.fb.group({});
//   }

//   ngOnInit(): void {
//     console.log("se inicio el componente form")
//     debugger

//     this.route.params.subscribe(params => {
//       this.entity = params['entity'].toLowerCase();
//       console.log(this.entity)
//     });

//     console.log(Array.isArray(this.field[this.entity]));
  
//     for (let item of this.field[this.entity]) {
//       this.form.addControl(item, this.fb.control('', Validators.required));
//     }
//   }

//   onSubmit() {
    
//   }

// }

// este funciono muy bien 
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup} from '@angular/forms';
// import { Observable } from 'rxjs';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { Field } from 'src/app/models/interface.interface';
// import { SelectComponent } from '../select/select.component';
// import { Store, select } from '@ngrx/store';
// import * as FlavorSelectors from '../../state/selector/flavor.selectors'
// import types from 'src/app/models/interface.interface';


// @Component({
//   selector: 'app-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, FormsModule, SelectComponent],
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss']
// })
// export class FormComponent {
//   flavors$: Observable<types.Flavor[]>=this.store.select(FlavorSelectors.selectAllFlavors)
//   form: FormGroup;
//   field: Record<string, Field> = {
//     "flavor": { type: "select", options: [] },
    
   
//   };
//   entity!: string;

//   constructor(private fb: FormBuilder, private route: ActivatedRoute, private store:Store) {
//     this.form = this.fb.group({});
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.entity = params['entity'].toLowerCase();
//     });
  
//     if (this.field[this.entity].type === 'select') {
//       this.flavors$.subscribe((flavors) => {
//         this.field[this.entity].options = flavors.map((flavor) => flavor.flavor);
//         console.log(this.field[this.entity].options);
//       });
//     }
//   }

//   onSubmit() {
//     // Realizar acciones cuando se envía el formulario
//   }

//   handleSelectChange(value: string): void {
//     this.form.patchValue({ 'flavor': value });
//   }
// }



