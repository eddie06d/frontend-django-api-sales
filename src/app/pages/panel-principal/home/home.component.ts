import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: any[] = [
    {
      title: {
        name: 'Registro de Pedidos',
        link: 'registrar-pedido',
        icon: 'fa-solid fa-cart-plus fa-2x'
      },
      subtitle: 'Datos Requeridos en la Base de Datos',
      items: [
        'Datos del cliente',
        'Lista de productos',
      ]
    },
    {
      title: {
        name: 'Lista de Pedidos',
        link: 'lista-pedidos',
        icon: 'fa-solid fa-cart-arrow-down fa-2x'
      },
      subtitle: 'Datos Registrados en la Base de Datos',
      items: [
        'ID, Número, Fecha del Pedido',
        'Razón Social del Cliente',
        'Fecha de entrega',
        'IGV, Importes'
      ]
    },
    {
      title: {
        name: 'Lista de Clientes',
        link: 'lista-clientes',
        icon: 'fa-solid fa-person fa-2x'
      },
      subtitle: 'Datos Registrados en la Base de Datos',
      items: [
        'RUC',
        'Razón Social del Cliente',
        'Dirección',
        'Tipo de Cliente'
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
