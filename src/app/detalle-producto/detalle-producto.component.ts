import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { CategoriasService } from '../services/categorias.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input()
  product_id;

  productForm;
  categorias;

  constructor(public fb:FormBuilder, private route: ActivatedRoute, public productosService: ProductosService,
      private router:Router, private categoriasService: CategoriasService) {
        this.productForm=this.fb.group({
          denominacion:["",[Validators.required]],
          sku:["",[Validators.required]],
          precio:["",[Validators.required]],
          precioOferta: [""],
          descripcion: [""],
          destacado: ["0"],
          stock:["",[Validators.required]],
          categoria:["",[Validators.required]]
        })
   }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.product_id = params['id'].toString();
        
        this.productosService.getProducto(this.product_id).subscribe(datos => {
          console.log(datos)

          this.productForm=this.fb.group({
            denominacion:[datos["data"].denominacion,[Validators.required]],
            sku:[datos["data"].sku,[Validators.required]],
            precio:[datos["data"].precio,[Validators.required]],
            precioOferta: [datos["data"].precioOferta],
            descripcion: [datos["data"].descripcion],
            destacado: [datos["data"].destacado],
            stock:[datos["data"].stock,[Validators.required]],
            categoria:[datos["data"].categoria,[Validators.required]]
          })
        })
      })

    this.categoriasService.getCategorias(new HttpParams()).subscribe( datos => { 
      console.log(datos);
      this.categorias = datos["data"].docs;
    })
  }

  modificaProducto() {
    this.productosService.modificaProducto(this.product_id, this.productForm.value).subscribe( datos => { 
      console.log("envia id = " + datos["data"]._id);
      var id = datos["data"]._id;
      //this.router.navigate(['/imagen_producto']);
      this.router.navigate(['/listaProductos']);
    })
  }

}
