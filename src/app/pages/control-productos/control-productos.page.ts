import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-control-productos',
  templateUrl: './control-productos.page.html',
  styleUrls: ['./control-productos.page.scss'],
})
export class ControlProductosPage implements OnInit {

  formulario: any;
  idproducto = '';
  constructor(private service: ProductoService, private ar: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.iniciarFormulario();
    this.idproducto = this.ar.snapshot.paramMap.get('idproducto');
    console.log(this.idproducto);
    if (this.idproducto != '' && this.idproducto != null){
      this.mostrarValores();
    }
  }

  mostrarValores(): void{
    this.service.getProducto(this.idproducto).subscribe((res: any) => {
      let producto = new Producto;
      producto = res;
      this.formulario.patchValue({
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock
      });
    });
  }

  iniciarFormulario() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      precio: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5)
      ]),
      stock: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2)
      ])
    });
  }

  guardarProducto() {
    let producto = new Producto();
    producto.nombre = this.formulario.value.nombre;
    producto.precio = this.formulario.value.precio;
    producto.stock = this.formulario.value.stock;
    console.log(producto);
    this.service.postProducto(producto).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/productos']);
    });
  }

  editarProducto() {
    let producto = new Producto();
    producto.nombre = this.formulario.value.nombre;
    producto.precio = this.formulario.value.precio;
    producto.stock = this.formulario.value.stock;
    console.log(producto);
    this.service.putProducto(this.idproducto, producto).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/productos']);
    });
  }

}
