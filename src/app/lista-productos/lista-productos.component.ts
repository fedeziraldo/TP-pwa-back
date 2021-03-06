import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpParams } from '@angular/common/http';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  denominacion = "";
  sku = "";
  precioMin = "";
  precioMax = "";
  orden = "";

  nextPage;
  page = "1";
  prevPage;

  productos;
  faPlus = faPlus;
  faSearch = faSearch;
  constructor(public productosService: ProductosService, private router: Router) { }


  getProductos() {
    let httpParams = new HttpParams()
      .set("denominacion", this.denominacion)
      .set("sku", this.sku)
      .set("precioMin", this.precioMin)
      .set("precioMax", this.precioMax)
      .set("page", this.page)
      .set("sort", this.orden);
    this.productosService.getProductos(new HttpParams()).subscribe(datos => {
      console.log(datos)
      this.productos = datos["data"].docs;
      this.nextPage = datos["data"].nextPage;
      this.page = datos["data"].page;
      this.prevPage = datos["data"].prevPage;
    })
  }

  ngOnInit() {
    this.getProductos();
  }

  buscar() {
    let httpParams = new HttpParams()
      .set("denominacion", this.denominacion)
      .set("sku", this.sku)
      .set("precioMin", this.precioMin)
      .set("precioMax", this.precioMax)
      .set("page", "1")
      .set("sort", this.orden);
    this.productosService.getProductos(httpParams).subscribe(datos => {
      console.log(datos)
      this.productos = datos["data"].docs;
      this.nextPage = datos["data"].nextPage;
      this.page = datos["data"].page;
      this.prevPage = datos["data"].prevPage;
    })
  }

  ordenar(columna) {
    this.orden = columna;
    let httpParams = new HttpParams()
      .set("denominacion", this.denominacion)
      .set("sku", this.sku)
      .set("precioMin", this.precioMin)
      .set("precioMax", this.precioMax)
      .set("page", "1")
      .set("sort", this.orden);
    this.productosService.getProductos(httpParams).subscribe(datos => {
      console.log(datos)
      this.productos = datos["data"].docs;
      this.nextPage = datos["data"].nextPage;
      this.page = datos["data"].page;
      this.prevPage = datos["data"].prevPage;
    })
  }

  paginar(pagina) {
    let httpParams = new HttpParams()
      .set("denominacion", this.denominacion)
      .set("sku", this.sku)
      .set("precioMin", this.precioMin)
      .set("precioMax", this.precioMax)
      .set("page", pagina)
      .set("sort", this.orden);
    this.productosService.getProductos(httpParams).subscribe(datos => {
      console.log(datos)
      this.productos = datos["data"].docs;
      this.nextPage = datos["data"].nextPage;
      this.page = datos["data"].page;
      this.prevPage = datos["data"].prevPage;
    })
  }

  detalleProducto(product_id){
    this.router.navigate(['/detalleproducto/'+ product_id], { queryParams: { "id": product_id } });
  }

  eliminar(id) {
    if (!confirm("¿Desea eliminar este producto?")) return
    this.productosService.eliminar(id).subscribe(datos => {
      console.log(datos)
      this.getProductos();
    })
  }

  desasociarImagen(prodId, path) {
    if (!confirm("¿Desea eliminar esta imagen?")) return
    this.productosService.desasociarImagen(prodId, path).subscribe(datos => {
      console.log(datos)
      this.getProductos();
    })
  }
}
