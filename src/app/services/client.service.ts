import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  API: string = 'http://localhost:8000/api/sales/client/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.API);
  }
}
