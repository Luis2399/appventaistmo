import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes : Cliente[] = [];
  constructor( private _clientesService : ClientesService) { }

  ngOnInit() {
    this._clientesService.getClientes().subscribe(
      resp => {
        this.clientes = resp;
        console.log(this.clientes);
      }
    );
  }

}
