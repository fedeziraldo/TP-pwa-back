import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(httpParams) {
    return this.http.get("http://localhost:3000/productos", {params: httpParams})
  }

  altaProducto(productosForm) {
    return this.http.post("http://localhost:3000/admin/productos", productosForm)
  }

  getProducto(product_id) {
    return this.http.get("http://localhost:3000/productos/" + product_id)
  }
}
