import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre  : string = 'Susana';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Pedrito', 'Carlitos', 'Alenka', 'Chipi', 'Ivan'];
  clientesMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliete esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarNombre(){
    this.nombre = 'Santiago';
    this.genero = 'masculino';
  }

  eliminarCliente(){
    this.clientes.pop();
  }

  persona = {
    nombre: 'Santiago',
    edad: 20,
    'estado Civil': 'soltero'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ]


}
