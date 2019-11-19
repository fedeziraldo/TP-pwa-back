import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get("http://localhost:3000/admin/categorias")
  }

  altaCategoria(categoriasForm) {
    return this.http.post("http://localhost:3000/admin/categorias", categoriasForm)
  }
}
