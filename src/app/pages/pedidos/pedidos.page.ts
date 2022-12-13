import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  pedidos: any

  constructor(private service: PedidoService) { }
  

  ngOnInit() {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.service.getPedidos().subscribe((res: any) => {
      //console.log(res);
      this.pedidos = res;
    });
  }

}