import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos;
  constructor(public productosService: ProductosService) { }


  getProductos() {
    this.productosService.getProductos().subscribe( datos => { 
      console.log(datos)
      this.productos = datos["data"].docs;
    })
  }

  ngOnInit() {
    this.getProductos();
  }

}
