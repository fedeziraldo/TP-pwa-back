import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  adminForm;
  adminError = false;
  serverError = false;
  passDontMatch = false;
  errorMessage = '';
  invalid;

  constructor(public fb:FormBuilder, public adminService: AdminService, private router:Router){
    this.adminForm=this.fb.group({
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]],
      password2:["",[Validators.required]]
    })
  }

  
  altaAdmin(){
    this.passDontMatch = false;

    if (this.adminForm.value.nombre.length == 0){
      this.adminError = true;
      this.errorMessage = '¡Atención! Debe ingresar el nombre';
      this.invalid = "invalid"
    } else {
      if (this.adminForm.value.password.length == 0) {
        this.adminError = true;
        this.errorMessage = '¡Atención! Debe ingresar la contraseña';
        this.invalid = "invalid"
      } else {
          if (this.adminForm.value.apellido.length == 0) {
            this.adminError = true;
            this.errorMessage = '¡Atención! Debe ingresar el apellido';
            this.invalid = "invalid"
          } else {
            if (this.adminForm.value.email.length == 0) {
              this.adminError = true;
              this.errorMessage = '¡Atención! Debe ingresar el correo electrónico7';
              this.invalid = "invalid"
            } else {
              if (this.adminForm.value.password != this.adminForm.value.password2) {
                this.adminError = true;
                this.errorMessage = '¡Atención! Las contraseñas no coinciden.';
                this.invalid = "invalid"
                this.passDontMatch = true;
              } else {
                this.adminService.altaUsuario(this.adminForm.value).subscribe( datos => { 
                this.router.navigate(['/listaAdmins/']);
              })
            }
          }
        }
      }
    }
  }

  ngOnInit() {
  }

}