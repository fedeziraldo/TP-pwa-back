import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-login',
  templateUrl: './lista-login.component.html',
  styleUrls: ['./lista-login.component.css']
})
export class ListaLoginComponent implements OnInit {

  loginForm;
  admins;
  faPlus = faPlus;
  constructor(public fb:FormBuilder, public loginService: LoginService) {
    this.loginForm=this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]],
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]]
    })
   }

  ngOnInit() {
    this.loginService.getAdmins().subscribe( datos => { 
      console.log(datos)
      this.admins = datos["data"];
    })
  }

}
