import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../productos.service';

import {  FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/upload';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({
      url: URL, 
      itemAlias: 'photo',
      authTokenHeader: "x-access-token",
      authToken:localStorage.getItem("token"),
    });
  productForm;
  constructor(public fb:FormBuilder, public productosService: ProductosService) { 
    this.productForm=this.fb.group({
      denominacion:["",[Validators.required]],
      sku:["",[Validators.required]],
      precio:["",[Validators.required]],
      precioOferta:["",[Validators.required]],
      descripcion:["",[Validators.required]]
    })
  }

  altaProducto() {
    this.productosService.altaProducto(this.productForm.value).subscribe( datos => { 
      console.log(datos)
    })
  }

  guardar(){
    console.log(this.productForm.value);
  }
  
  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         console.log("ImageUpload:uploaded:", item, status, response);
     };
  }

}
