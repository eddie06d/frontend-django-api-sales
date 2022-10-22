import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  API: string = 'http://localhost:8000/api/sales/order/';
  API_ORDER_DETAIL: string = 'http://localhost:8000/api/sales/order-detail/';

  constructor(private http: HttpClient) { }

  createOrder(body: any) {
    return this.http.post(this.API, body, {
      headers: this.httpOptions.headers
    });
  }

  getAll() {
    return this.http.get(this.API, {
      headers: this.httpOptions.headers
    });
  }

  getOrderDetail(id: number) {
    return this.http.get(`${this.API_ORDER_DETAIL}${id}/`, {
      headers: this.httpOptions.headers
    });
  }

}
