import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input()
  product_id;
  product;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.product_id = params['id'].toString();
        
        this.productosService.getProducto(this.product_id).subscribe(datos => {
          console.log(datos)
          this.product = datos["data"];
        })
      })
  }

}
