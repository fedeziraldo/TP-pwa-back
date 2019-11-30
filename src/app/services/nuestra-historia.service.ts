import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuestraHistoriaService {

  constructor(private http: HttpClient) { }

  getHistoria() {
    return this.http.get("http://localhost:3000/admin/historia");
  };

  saveHistoria(historiaForm) {
    return this.http.post("http://localhost:3000/admin/historia", historiaForm);
  };
}
