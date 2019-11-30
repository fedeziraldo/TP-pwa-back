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

  getUsers() {
    return this.http.get("http://localhost:3000/admin/users")
  }

  registrar(loginForm) {
    return this.http.post("http://localhost:3000/autentication/registrar", {
      loginForm
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
