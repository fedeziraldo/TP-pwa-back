import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  constructor(private http: HttpClient) { }

  getQuienesSomos() {
    return this.http.get("http://localhost:3000/admin/quienes");
  };

  saveQuienesSomos(quienesForm) {
    return this.http.post("http://localhost:3000/admin/productos", quienesForm);
  };
}
