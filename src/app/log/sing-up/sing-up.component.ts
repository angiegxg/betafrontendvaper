import { Component } from '@angular/core'
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms'

import { Router } from '@angular/router'
import { SingUpServiceService } from './sing-up-service.service'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class SingUpComponent {
  logForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  constructor( private singup: SingUpServiceService, private router: Router){}

  handleSubmit() {
    if (this.logForm.valid) {
      const logFormData = this.logForm.value
      console.log(logFormData)
      this.singup.login(logFormData!.email!, logFormData!.password!)
          .subscribe((response) => {
            // Manejar la respuesta del servicio según tus necesidades
            console.log('Respuesta del servicio:', response);
            if (response ) {
              // Almacenar cualquier información necesaria en el servicio o local storage
              // (por ejemplo, el usuario actual, roles, etc.)
    
              // Redirigir al usuario al "home"
              this.router.navigate(['/']);
            }
          });
    }
  }
}
