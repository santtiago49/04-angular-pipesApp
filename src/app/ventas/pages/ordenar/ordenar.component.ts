import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayuscula: boolean = true;

  ordenarPor: string = ''


  cambiarMayusculas(){
    this.enMayuscula = !this.enMayuscula;
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: 3
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: 1
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: 2
    },
    {
      nombre: 'Iron Man',
      vuela: true,
      color: 0
    },
  ]

  cambiarOrden(value: string){
    this.ordenarPor = value;
  }


}
