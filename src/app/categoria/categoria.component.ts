import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Validators, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias;
  categoriaForm;

  constructor(public fb:FormBuilder, private categoriasService: CategoriasService, private router: Router) {
    this.categoriaForm=this.fb.group({
      nombre:["",[Validators.required]],
      padre:["",[Validators.required]],
    })
  }
  
  altaCategoria() {
    this.categoriasService.altaCategoria(this.categoriaForm.value).subscribe( datos => { 
      console.log(datos);
      this.router.navigate(['/listaCategorias']);
    })
  }
  
  ngOnInit() {
    this.categoriasService.getCategorias(new HttpParams()).subscribe( datos => { 
      console.log(datos);
      this.categorias = datos["data"].docs;
    })
  }

}
