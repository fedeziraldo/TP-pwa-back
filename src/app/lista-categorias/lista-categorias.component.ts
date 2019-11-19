import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias;
  faPlus = faPlus;
  constructor(public categoriasService: CategoriasService) { }

  getCategorias() {
    this.categoriasService.getProductos().subscribe( datos => { 
      console.log(datos)
      this.categorias = datos["data"].docs;
    })
  }

  ngOnInit() {
    this.getCategorias();
  }

}
