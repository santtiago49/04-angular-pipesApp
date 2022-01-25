import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  lowercase: string = 'santiago'
  uppercase: string = 'SANTIAGO'
  nombreCompleto: string = 'sAntIagO gOmEZ'

  constructor() { }

  ngOnInit(): void {
  }

}
