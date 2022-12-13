import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes: any

  constructor(private service: ClienteService) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.service.getClientes().subscribe((res: any) => {
      //console.log(res);
      this.clientes = res;
    });
  }

}
