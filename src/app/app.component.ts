import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Backoffice ecommerce';
  usuario = ''
  constructor(public loginService: LoginService, private router:Router) {
    
  }

  logout() {
    this.loginService.logout()
  }

  logueado() {
    if (this.loginService.isAuthenticated()) {
      this.usuario = localStorage.getItem("usuario")
      return true
    }
    return false
  }
  
  ngOnInit() {
    if (this.logueado())
      this.router.navigate(['/listaProductos']);
    else
    this.router.navigate(['/login']);
  }
}
