import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-goback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goback.component.html',
  styleUrls: ['./goback.component.scss']
})
export class GobackComponent {

  constructor(private location: Location) {}

  
  goBack(): void {
    this.location.back();
  }

}
