import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() entity!: string;
  constructor(private router: Router) {
   
    
  }
  

  handleActionClick() {
    console.log("estoy en handleActionClick",this.entity)
    if (this.entity==="Flavor"){
      this.router.navigate(['formflavor']); 
    }

    if (this.entity==="Product"){
      this.router.navigate(['formproduct']); 
    }
    if (this.entity==="Seller"){
      this.router.navigate(['formseller']); 
    }

    if (this.entity==="Stock"){
      this.router.navigate(['formStock']); 
    }

    if (this.entity==="Distributions"){
      this.router.navigate(['formdistribution']); 
    }

    if (this.entity==="Sales"){
      this.router.navigate(['formsale']); 
    }
    // this.router.navigate(['formselect/', this.entity]);
    
    
    
  }

  handleActionClickView(){
    if (this.entity==="Stock"){
      this.router.navigate(['tableStock']); 
    }
    if (this.entity==="Sales"){
      this.router.navigate(['tablesale']); 
    }
    if (this.entity==="Distributions"){
      this.router.navigate(['tableDistribution']); 
    }

    
  }
  



}
