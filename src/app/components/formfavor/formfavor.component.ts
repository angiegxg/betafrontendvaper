import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GobackComponent } from '../goback/goback.component';
import { environment } from 'src/app/environments/environments';

@Component({
  selector: 'app-formfavor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,GobackComponent],
  templateUrl: './formfavor.component.html',
  styleUrls: ['./formfavor.component.scss']
})
export class FormfavorComponent {
  flavorForm: FormGroup; // Aquí

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.flavorForm = this.makeform(); // Inicializa flavorForm
  }
  
  makeform(): FormGroup {
    return this.fb.group({
      flavor: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.flavorForm.valid) {
      // Obtén los datos del formulario
      const formData = this.flavorForm.value;
  
      // Crea el objeto que contiene los datos que deseas enviar
      const requestData = {
        flavors: [{ flavor: formData.flavor }],
        userId: +localStorage.getItem('id')!
      };

      

      
  
      // Realiza la solicitud HTTP POST
      this.http.post(environment.apiUrl+'flavor', requestData)
        .subscribe(
          (response) => {
            console.log('Respuesta del servidor:', response);
            const responseString = JSON.stringify(response, null, 2)
            alert(responseString);
          },
          (error) => {
            console.error('Error al enviar datos:', error);
          }
        );
    } else {
      // Realizar acciones cuando el formulario es inválido
      alert('Por favor, complete el formulario correctamente.');
    }
  }
  
}
