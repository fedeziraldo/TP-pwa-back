import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../services/compras.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  compras;
  constructor(public comprasService: ComprasService) { }


  getCompras() {
    this.comprasService.getCompras().subscribe( datos => { 
      console.log(datos)
      this.compras = datos["data"].docs;
    })
  }

  ngOnInit() {
    this.getCompras();
  }

}
