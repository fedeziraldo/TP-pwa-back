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

  admins;
  faPlus = faPlus;
  constructor(public loginService: LoginService){
    
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loginService.getUsers().subscribe( datos => { 
      console.log(datos)
      this.admins = datos["data"].docs;
    })
  }

  eliminar(id) {
    if (!confirm("¿Desea eliminar este usuario?")) return
    this.loginService.eliminar(id).subscribe(datos => {
      console.log(datos)
      this.getUsers();
    })
  }

}
