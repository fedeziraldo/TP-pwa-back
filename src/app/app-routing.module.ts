import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"productos", canActivate:[AuthGuard], component: ProductosComponent},
  {path:"listaProductos", canActivate:[AuthGuard], component: ListaProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
