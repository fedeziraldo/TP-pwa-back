import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpParams } from '@angular/common/http';

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
  page;
  prevPage;

  productos;
  faPlus = faPlus;
  constructor(public productosService: ProductosService) { }


  getProductos() {
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

}
