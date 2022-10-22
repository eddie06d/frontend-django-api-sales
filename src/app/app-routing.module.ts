import { DetallePedidoComponent } from './pages/panel-principal/detalle-pedido/detalle-pedido.component';
import { ListaClientesComponent } from './pages/panel-principal/lista-clientes/lista-clientes.component';
import { ListaPedidosComponent } from './pages/panel-principal/lista-pedidos/lista-pedidos.component';
import { RegistrarPedidoComponent } from './pages/panel-principal/registrar-pedido/registrar-pedido.component';
import { HomeComponent } from './pages/panel-principal/home/home.component';
import { PanelPrincipalComponent } from './pages/panel-principal/panel-principal.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'panel-principal', component: PanelPrincipalComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'registrar-pedido', component: RegistrarPedidoComponent },
    { path: 'lista-pedidos', component: ListaPedidosComponent },
    { path: 'lista-clientes', component: ListaClientesComponent },
    { path: 'detalle-pedido/:id', component: DetallePedidoComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
  ] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
