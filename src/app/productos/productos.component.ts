import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import {Router, ActivatedRoute} from "@angular/router";
import { CategoriasService } from '../services/categorias.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productForm;
  categorias;
  constructor(public fb:FormBuilder, public productosService: ProductosService,
     private router:Router, private categoriasService: CategoriasService) { 
    this.productForm=this.fb.group({
      denominacion:["",[Validators.required]],
      sku:["",[Validators.required]],
      precio:["",[Validators.required]],
      precioOferta: [""],
      descripcion: [""],
      destacado: ["1"],
      stock:["",[Validators.required]],
      categoria:["",[Validators.required]]
    })
  }

  altaProducto() {
    this.productosService.altaProducto(this.productForm.value).subscribe( datos => { 
      console.log("envia id = " + datos["data"]._id);
      var id = datos["data"]._id;
      //this.router.navigate(['/imagen_producto']);
      this.router.navigate(['/imagen_producto/' + id], { queryParams: { "id": datos["data"]._id } });
    })
  }

  guardar(){
    console.log(this.productForm.value);
  }
  
  ngOnInit() {
    this.categoriasService.getCategorias(new HttpParams()).subscribe( datos => { 
      console.log(datos);
      this.categorias = datos["data"].docs;
    })
  }

}
