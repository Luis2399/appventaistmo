import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) { }

  getProductos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url, httpOptions);
  }

  getProducto(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url + '/' + id, httpOptions);
  }
}
