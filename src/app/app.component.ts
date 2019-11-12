import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Backoffice ecommerce';
  usuario = ''
  constructor(public loginService: LoginService) {
    
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
}
