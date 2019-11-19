import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { InterceptorService } from './interceptors.service';
import { FileSelectDirective } from 'ng2-file-upload';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaLoginComponent } from './lista-login/lista-login.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ImagenProductoComponent } from './imagen-producto/imagen-producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AdminsComponent } from './admins/admins.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,
    DetalleProductoComponent,
    ListaProductosComponent,
    FileSelectDirective,
    ListaLoginComponent,
    ListaCategoriasComponent,
    ImagenProductoComponent,
    CategoriaComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
