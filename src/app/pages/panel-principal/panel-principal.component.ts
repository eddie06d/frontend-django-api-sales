import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {
  items: any[] = [
    {
      name: 'Inicio',
      icon: 'home',
      link: '/panel-principal'
    },
    {
      name: 'Registro de Pedidos',
      icon: 'app_registration',
      link: 'registrar-pedido'
    },
    {
      name: 'Lista de Pedidos',
      icon: 'badge',
      link: 'lista-pedidos'
    },
    {
      name: 'Lista de Clientes',
      icon: 'fact_check',
      link: 'lista-clientes'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
