import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

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
    return this.http.get(this.url + '/edit/' + id, httpOptions);
  }

  postProducto(producto: Producto):Observable<Producto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Producto>(this.url + '/create', producto, httpOptions);
  }

  putProducto(id: string, producto: Producto):Observable<Producto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Producto>(this.url + '/update/' + id, producto, httpOptions);
  }

  deleteProducto(id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(this.url + '/delete/' + id, httpOptions);
  }
}
