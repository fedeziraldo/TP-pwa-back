import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  altaUsuario(adminForm) {
    return this.http.post("http://localhost:3000/admin/users/", adminForm)
  }
}
