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

  modificaProducto(productId, productosForm) {
    return this.http.put("http://localhost:3000/admin/productos/" + productId, productosForm)
  }

  getProducto(product_id) {
    return this.http.get("http://localhost:3000/productos/" + product_id)
  }

  eliminar(product_id) {
    return this.http.delete("http://localhost:3000/admin/productos/" + product_id)
  }

  desasociarImagen(product_id, path) {
    return this.http.post("http://localhost:3000/admin/productos/desasociarImagen/" + product_id, {
      path
    })
  }
}
