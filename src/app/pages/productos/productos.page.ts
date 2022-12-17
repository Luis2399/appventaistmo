import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Carrito } from 'src/app/models/Carrito';
import { Pedido } from 'src/app/models/Pedido';
import { ProductosEnCarrito } from 'src/app/models/ProductosEnCarrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: any;
  clientes: any;
  productosCarrito: ProductosEnCarrito[];
  contador = 0;
  total = 0;
  idCliente = 0;
  idPedido = 0;

  constructor(private service: ProductoService, private service2: PedidoService, private service3: CarritoService, private carrito: CarritoService, private alertController: AlertController, private clienteService: ClienteService) { }

  ngOnInit() {
    this.obtenerProductos();
    this.getContador();
    this.carrito.enviarContadorObservable.subscribe(res => {
      this.contador = res;
    })
    this.obtenerClientes();
  }

  obtenerTotal() {
    this.total = this.carrito.calcularTotal();
  }

  getContador() {
    this.contador = this.carrito.obtenerContador();
    this.productosCarrito = this.carrito.obtenerProductos();
    //this.obtenerProductos();
  }

  obtenerClientes() {
    this.clienteService.getClientes().subscribe((res: any) => {
      this.clientes = res;
    });
  }

  obtenerProductos() {
    this.service.getProductos().subscribe((res: any) => {
      //console.log(res);
      this.productos = res;
    });
  }

  async presentAlert(productosCarrito) {
    let carritoProductoPrueba = productosCarrito;
    const alert = await this.alertController.create({
      header: 'Ingrese la cantidad',
      buttons: [{
        text: 'OK',
        handler: (data) => {
          //console.log(data);
          let cantidad = data[0];
          console.log(cantidad);
          carritoProductoPrueba.cantidadCarrito = cantidad;
          carritoProductoPrueba.subtotalCarrito = carritoProductoPrueba.precio * carritoProductoPrueba.cantidadCarrito;
          carritoProductoPrueba.stock = carritoProductoPrueba.stock - cantidad;
          if (this.carrito.obtenerContador() < 20) {
            this.carrito.agregarProducto(carritoProductoPrueba);
          }else {
           console.log('No puedes agregar mas de 20 productos al carrito');
          }
        },
      },],
      inputs: [
        {
          type: 'number',
          placeholder: 'cantidad',
          min: 1,
          max: 10,
        }
      ],
    });

    //console.log(alert);

    await alert.present();
  }

  agregarAlCarrito(productosCarrito: ProductosEnCarrito) {
    this.presentAlert(productosCarrito);
    /*
    console.log(this.cantidad);
    if (this.cantidad != 0){
      producto.stock = this.cantidad;
      if (this.carrito.obtenerContador() < 20) {
        this.carrito.agregarProducto(producto);
      }else {
        console.log('No puedes agregar mas de 20 productos al carrito');
      }
    }*/
    
  }

  confirmarCompra() {
    let pedido = new Pedido;
    pedido.idCliente = this.idCliente;
    pedido.total = this.total;
    let fechaHoy = new Date();
    pedido.fecha = fechaHoy.toISOString().split('T')[0];
    this.service2.postPedido(pedido).subscribe((res: any) => {
      this.idPedido = res.id;
      this.productosCarrito.map((producto) => {
        let carrito = new Carrito();
        carrito.idPedido = this.idPedido;
        carrito.cantidad = +producto.cantidadCarrito;
        carrito.idProducto = +producto.idproducto;
        carrito.subtotal = +producto.subtotalCarrito;
        console.log(carrito);
        this.service3.postCarrito(carrito).subscribe((res: any) => {
          console.log('Todo bien!!');
        });
      });
    });
    //console.log(fechaHoy.toISOString().split('T')[0]);
    
  }

  eliminarProducto(productosCarrito: ProductosEnCarrito) {
    productosCarrito.stock = +productosCarrito.stock + +productosCarrito.cantidadCarrito;//Conversion a number
    this.carrito.eliminarProducto(productosCarrito);
    this.obtenerTotal();
  }

  eliminarProductoAPI(idproducto: string) {
    this.service.deleteProducto(idproducto).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    })
  }

  checarID(id: number) {
    let productos = this.carrito.obtenerProductos();

    for (let i = 0; i < productos.length; i++) {
      if (productos[i]['idproducto'] == id) {
        return true;
      }
    }
    return false
  }

  check() {
    if (this.total === 0 || this.idCliente === 0){// esto hace checar si selecciono cliente y si tiene un total valido
      return true;//esto si no hay valor correcto en ambas variables significa que una de las dos falta entonces desactivame el boton
    }
    return false;
  }

  recargar() {
    window.location.reload();
  }

}
