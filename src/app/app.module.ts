import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanelPrincipalComponent } from './pages/panel-principal/panel-principal.component';
import { HomeComponent } from './pages/panel-principal/home/home.component';
import { RegistrarPedidoComponent } from './pages/panel-principal/registrar-pedido/registrar-pedido.component';
import { ListaPedidosComponent } from './pages/panel-principal/lista-pedidos/lista-pedidos.component';
import { ListaClientesComponent } from './pages/panel-principal/lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallePedidoComponent } from './pages/panel-principal/detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelPrincipalComponent,
    HomeComponent,
    RegistrarPedidoComponent,
    ListaPedidosComponent,
    ListaClientesComponent,
    DetallePedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
