import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'token';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  registrar(loginForm) {
    return this.http.post("http://localhost:3000/autentication/registrar", {
      email: loginForm.email,
      password: loginForm.password,
      nombre: loginForm.nombre,
      apellido: loginForm.apellido
    });
  }

  loginAdmin(loginForm) {
    return this.http.post("http://localhost:3000/autentication/loginAdmin", 
      loginForm
    );
  }

  checkToken() {
    console.log("check")
    let token = localStorage.getItem(TOKEN_KEY);
    if(token){
      this.authenticationState.next(true);
    }
  }
 
  login(loginForm) {
    console.log("Usuario entre",loginForm.email,loginForm.password)
    return this.http.post("http://localhost:3000/autentication/loginAdmin", {
      email: loginForm.email,
      password: loginForm.password
    });

  }
 
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.authenticationState.next(false);
    
  }
  authenticante(){
    this.authenticationState.next(true);
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }
}
