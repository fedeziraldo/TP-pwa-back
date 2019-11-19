import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AuthGuard } from './auth.guard';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaLoginComponent } from './lista-login/lista-login.component';
import { ImagenProductoComponent } from './imagen-producto/imagen-producto.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"productos", canActivate:[AuthGuard], component: ProductosComponent},
  {path:"listaProductos", canActivate:[AuthGuard], component: ListaProductosComponent},
  {path:"listaCategorias", canActivate:[AuthGuard], component: ListaCategoriasComponent},
  {path:"listaAdmins", canActivate:[AuthGuard], component: ListaLoginComponent},
  {path:"imagen_producto/:id", canActivate:[AuthGuard], component: ImagenProductoComponent, pathMatch: 'full'},
  {path:"categoria", canActivate:[AuthGuard], component: CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
