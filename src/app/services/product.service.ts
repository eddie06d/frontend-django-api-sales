import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = 'http://localhost:8000/api/sales/product/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.API);
  }

}
