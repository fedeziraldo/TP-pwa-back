import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
import {ActivatedRoute } from '@angular/router';

const URL = 'http://localhost:3000/upload';

@Component({
  selector: 'app-imagen-producto',
  templateUrl: './imagen-producto.component.html',
  styleUrls: ['./imagen-producto.component.css']
})
export class ImagenProductoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  prod_id;

  public uploader:FileUploader = new FileUploader({
    url: URL, 
    itemAlias: 'photo',
    authTokenHeader: "x-access-token",
    authToken:localStorage.getItem("token"),
  });


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.prod_id = params['id'].toString();
        console.log("llega =" + this.prod_id)
      })
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         console.log("ImageUpload:uploaded:", item, status, response);
     };
  }

}
