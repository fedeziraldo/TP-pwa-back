import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  loginError = false;
  constructor(public fb:FormBuilder, public loginService: LoginService, private router:Router, private route: ActivatedRoute) { 
    this.loginForm=this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.loginError){
        this.loginError = true;
      }
    });
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
        this.router.navigate(['/listaProductos']);
      }else{
        //Usuario incorrecto
      }
    })
  }

  
  ngOnInit() {
  }

}
