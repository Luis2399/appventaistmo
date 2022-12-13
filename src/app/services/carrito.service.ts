import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Carrito } from '../models/Carrito';
import { ProductosEnCarrito } from '../models/ProductosEnCarrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private contador: number = 0;
  private productos: ProductosEnCarrito [] = [];
  private enviarContadorSubject = new Subject<number>();
  public enviarContadorObservable = this.enviarContadorSubject.asObservable();
  url = 'http://localhost:8080/api/carritos';

  constructor(private http: HttpClient) { }

  enviarContador(contador: number) {
    this.enviarContadorSubject.next(contador);
    //this.contador = contador;
  }

  agregarProducto(producto: ProductosEnCarrito) {
    this.productos.push(producto);
    this.contador++;
    this.enviarContador(this.contador);
  }

  eliminarProducto(producto: ProductosEnCarrito) {
    this.productos.splice(this.productos.indexOf(producto), 1);
    this.contador--;
    this.enviarContador(this.contador);
  }

  obtenerProductos() {
    return this.productos;
  }

  obtenerContador() {
    return this.contador;
  }

  vaciarCarrito() {
    this.productos = [];
    this.contador = 0;
    this.enviarContador(this.contador);
  }

  obtenerProducto(id: number) {
    return this.productos[id];
  }

  calcularTotal(): number {
    let suma = 0;
    let multiplica = 0;
    if (this.productos.length != 0){
      this.productos.forEach(producto => {
        multiplica = producto.precio * producto.cantidadCarrito;
        suma = suma + multiplica;
      });
    }

    return suma;
  }

  ////////////////////////////////////////////////////////////////////////////////////////

  postCarrito(carrito: Carrito):Observable<Carrito> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Carrito>(this.url + '/create', carrito, httpOptions);
  }
}
