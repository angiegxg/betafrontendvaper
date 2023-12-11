import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GobackComponent } from '../goback/goback.component';
import * as DistributionSelectors from '../../state/selector/distribution.selector'
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table-distribution',
  standalone: true,
  imports: [CommonModule, GobackComponent],
  templateUrl: './table-distribution.component.html',
  styleUrls: ['./table-distribution.component.scss']
})
export class TableDistributionComponent {
  distributions$: Observable<types.Distribution[]> = this.store.select(DistributionSelectors.selectAllDistribution);
  header: string[] = ["Id","Date", "From", "to", "Product", "flavor", "Quantity"];
  files: any[] = [];
  constructor(private store: Store) {

  }
  ngOnInit(): void{
    this.distributions$.subscribe((distributions)=>{
      this.files= distributions.map((distribution) => {
        const saleDate: Date = new Date(distribution!.date!);
        const date = `${saleDate.getDate()}-${saleDate.getMonth() + 1}-${saleDate.getFullYear()}`;
        // const date = distribution.date;
        const from = distribution.sentFromStock!.seller!.name || "";
        const to = distribution.receivedAtStock!.seller!.name;
        const product = distribution.sentFromStock!.product!.product!.name;
        const flavor = distribution.sentFromStock!.product!.flavor!.flavor;
        const quantity = distribution.quantity;
    
        return { date, from, to, product, flavor, quantity };
      });
  })
}
}
