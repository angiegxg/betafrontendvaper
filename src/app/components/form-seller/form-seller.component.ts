import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GobackComponent } from '../goback/goback.component';
import { environment } from 'src/app/environments/environments';

@Component({
  selector: 'app-form-seller',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GobackComponent],
  templateUrl: './form-seller.component.html',
  styleUrls: ['./form-seller.component.scss']
})
export class FormSellerComponent {
  sellerForm: FormGroup; // Aquí

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sellerForm = this.makeform(); // Inicializa flavorForm
  }
  
  makeform(): FormGroup {
    return this.fb.group({
      seller: ['', Validators.required],
      commission: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.sellerForm.valid) {
      // Obtén los datos del formulario
      const formData = this.sellerForm.value;
  
      // Crea el objeto que contiene los datos que deseas enviar
      const requestData = {
        seller: { name: formData.seller, commission: parseInt(formData.commission), userId:+localStorage.getItem('id')!}
      };
      console.log(requestData)
  
      // Realiza la solicitud HTTP POST
      this.http.post(environment.apiUrl+'seller', requestData)
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
