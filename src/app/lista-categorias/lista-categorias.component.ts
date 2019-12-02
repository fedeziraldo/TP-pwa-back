import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias;
  faPlus = faPlus;
  nombre;
  constructor(public categoriasService: CategoriasService) { }

  getCategorias() {
    this.categoriasService.getCategorias(new HttpParams()).subscribe( datos => { 
      console.log(datos)
      this.categorias = datos["data"].docs;
    })
  }

  ngOnInit() {
    this.getCategorias();
  }

  buscar() {
    let httpParams = new HttpParams().set("nombre", this.nombre);
    this.categoriasService.getCategorias(httpParams).subscribe( datos => { 
      console.log(datos)
      this.categorias = datos["data"].docs;
    })
  }

  eliminar(id) {
    if (!confirm("¿Desea eliminar esta Categoria?")) return
    this.categoriasService.eliminar(id).subscribe(datos => {
      console.log(datos)
      this.getCategorias();
    })
  }

}
