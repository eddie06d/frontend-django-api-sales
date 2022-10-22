import { ProductService } from './../../../services/product.service';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  order: any;
  productos: any[] = [];

  constructor(
    private orderSvc: OrderService,
    private activatedRoute: ActivatedRoute,
    private productSvc: ProductService
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.orderSvc.getOrderDetail(id).subscribe({
      next: (data) => this.order = data,
      error: (err) => console.log(err)
    });

    this.productSvc.getAll().subscribe({
      next: (data: any) => this.productos = data,
      error: (err) => console.log(err)
    });
  }

  getNameProductByCode(code: string): string {
    const product = this.productos.find((p) => p.code == code);
    return product.name;
  }

}
