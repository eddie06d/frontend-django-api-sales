import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API: string = 'http://localhost:8000/api/token/';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.API, data);
  }

}
