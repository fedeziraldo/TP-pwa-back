import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(httpParams) {
    return this.http.get("http://localhost:3000/admin/categorias", {params: httpParams})
  }

  altaCategoria(categoriasForm) {
    return this.http.post("http://localhost:3000/admin/categorias", categoriasForm)
  }
}
