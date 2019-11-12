import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(public fb:FormBuilder, public loginService: LoginService) { 
    this.loginForm=this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  registrar() {
    this.loginService.registrar(this.loginForm.value).subscribe( datos => { 
      console.log(datos) 
    })
  }
  
  loginAdmin() {
    this.loginService.loginAdmin(this.loginForm.value).subscribe( datos => { 
      if(datos["data"] && datos["data"].token){
        console.log(datos["data"].token) 
        localStorage.setItem("token", datos["data"].token)
        localStorage.setItem("usuario", datos["data"].user.nombre)
        this.loginService.authenticante();
      }else{
        //Usuario incorrecto
      }
    })
  }

  
  ngOnInit() {
  }

}
