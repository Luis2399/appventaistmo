import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url, httpOptions);
  }

  getCliente(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url + '/' + id, httpOptions);
  }

  postCliente(cliente: Cliente):Observable<Cliente> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Cliente>(this.url + '/create', cliente, httpOptions);
  }
}
