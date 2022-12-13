import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  path = `${environment.url}/clientes`;
  constructor( private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.path);
  }
}
