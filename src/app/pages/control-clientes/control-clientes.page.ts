import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-control-clientes',
  templateUrl: './control-clientes.page.html',
  styleUrls: ['./control-clientes.page.scss'],
})
export class ControlClientesPage implements OnInit {

  formulario: any;
  constructor(private service: ClienteService) { }

  ngOnInit() {
    this.iniciarFormulario()
  }

  iniciarFormulario() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(25)
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      calle: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]),
      CP: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]),
      numExt: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),
      numInt: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])
    });
  }

  guardarCliente() {
    let cliente = new Cliente();
    cliente.nombre = this.formulario.value.nombre;
    cliente.apellido = this.formulario.value.apellido;
    cliente.email = this.formulario.value.email;
    cliente.telefono = this.formulario.value.telefono;
    cliente.calle = this.formulario.value.calle;
    cliente.cp = this.formulario.value.CP;
    cliente.numeroext = this.formulario.value.numExt;
    cliente.numeroint = this.formulario.value.numInt;
    console.log(cliente);



    this.service.postCliente(cliente).subscribe((res: any) => {
      console.log(res);
    });
  }

}
