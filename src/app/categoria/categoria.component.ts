import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias = [{_id: 12321, nombre: "pp"}];
  categoriaForm;

  constructor(public fb:FormBuilder, private categoriasService: CategoriasService) {
    this.categoriaForm=this.fb.group({
      nombre:["",[Validators.required]],
      padre:["",[Validators.required]],
    })
  }
  
  altaCategoria() {
    this.categoriasService.altaCategoria(this.categoriaForm.value).subscribe( datos => { 
      console.log(datos);
    })
  }
  
  ngOnInit() {
    this.categoriasService.getCategorias().subscribe( datos => { 
      console.log(datos);
      this.categorias = datos["data"];
    })
  }

}
