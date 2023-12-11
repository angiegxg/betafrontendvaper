import { Component } from '@angular/core'
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms'
import { LoginServiceService } from './login.service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  logForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  constructor( private loginService: LoginServiceService, private router: Router){}

  handleSubmit() {
    if (this.logForm.valid) {
      const logFormData = this.logForm.value
      console.log(logFormData)
      this.loginService.login(logFormData!.email!, logFormData!.password!)
          .subscribe((response) => {
            // Manejar la respuesta del servicio según tus necesidades
            console.log('Respuesta del servicio:', response);
            if (response && response.exists.token ) {
              // Almacenar cualquier información necesaria en el servicio o local storage
              // (por ejemplo, el usuario actual, roles, etc.)
    
              // Redirigir al usuario al "home"
              this.router.navigate(['/home']);
            }
          });
    }
  }

}
