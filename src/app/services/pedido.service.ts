import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url, httpOptions);
  }

  getPedido(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url + '/' + id, httpOptions);
  }

  postPedido(pedido: Pedido): Observable<Pedido> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Pedido>(this.url + '/create', pedido, httpOptions);
  }
}


