import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from './../../../services/client.service';
import { ProductService } from './../../../services/product.service';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.css']
})
export class RegistrarPedidoComponent implements OnInit {
  productos: any[] = [];
  clientes: any[] = [];
  productos_filtrados!: any[];
  text_filter: string = '';
  values: string[] = [];
  productos_seleccionados: any[] = [];

  form!: FormGroup;

  constructor(
    private orderSvc: OrderService,
    private productSvc: ProductService,
    private clientSvc: ClientService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      delivery_date: ['', Validators.required],
      delivery_address: ['', Validators.required],
      client_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.productSvc.getAll().subscribe({
      next: (data: any) => {
        this.productos = data;
        this.productos_filtrados = data;
      },
      error: (err) => console.log(err)
    });

    this.clientSvc.getAll().subscribe({
      next: (data: any) => {
        this.clientes = data;
      },
      error: (err) => console.log(err)
    });
  }

  private setCategories(): void {
    this.text_filter = 'Listado de categorías';
    this.values = [...new Set(this.productos.map(producto => producto.product_category_id))];
  }

  private setUnitsMeasure(): void {
    this.text_filter = 'Listado de unidades de medida';
    this.values = [...new Set(this.productos.map(producto => producto.unit_measure_id))];
  }

  onChangeTypeFilter(event: any): void {
    const value = event.value;
    if(value == 'categoria') this.setCategories();
    else if(value == 'unidad_medida') this.setUnitsMeasure();
  }

  onChangeValueFilter(event: any, type_filter: string): void {
    const value = event.value;
    if(!value) {
      this.productos_filtrados = this.productos;
      return;
    }
    if(type_filter == 'categoria') this.productos_filtrados = this.productos.filter(producto => producto.product_category_id == value);
    else if(type_filter == 'unidad_medida') this.productos_filtrados = this.productos.filter(producto => producto.unit_measure_id == value);
  }

  onChangeSelectProduct(event: any): void {
    const product = event.value;
    this.productos_seleccionados.push({
      ...product,
      cantidad: 1,
    });
  }

  removeProduct(code: string): void {
    this.productos_seleccionados = this.productos_seleccionados.filter(producto => producto.code != code);
  }

  addQuantity(code: string): void {
    const index = this.productos_seleccionados.findIndex(producto => producto.code == code);
    this.productos_seleccionados[index].cantidad++;
  }

  removeQuantity(code: string): void {
    const index = this.productos_seleccionados.findIndex(producto => producto.code == code);
    if(this.productos_seleccionados[index].cantidad == 1) return;
    this.productos_seleccionados[index].cantidad--;
  }

  getTotalPrice(): number {
    let total = 0;
    this.productos_seleccionados.forEach(producto => {
      total += producto.sale_price * producto.cantidad;
    });
    return total;
  }

  onSubmit(): void {
    const number = `${new Date().getFullYear()}${Math.floor(Math.random() * 1000)}`;
    let products = this.productos_seleccionados.map(producto => {
      return {
        code: producto.code,
        quantity: producto.cantidad
      };
    });
    let body_order = {
      ...this.form.value,
      number,
      date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      list_products: JSON.stringify(products)
    };
    this.orderSvc.createOrder(body_order).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }

}
