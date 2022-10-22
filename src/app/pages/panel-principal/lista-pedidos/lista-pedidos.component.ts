import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  pedidos: any[] = [];
  displayedColumns: string[] = ['Número', 'Fecha', 'Dirección de entrega', 'Total', 'Acciones'];
  order_selected!: any;

  constructor(private orderSvc: OrderService) { }

  ngOnInit(): void {
    this.orderSvc.getAll().subscribe({
      next: (data: any) => this.pedidos = data,
      error: (err) => console.log(err)
    });
  }

}
