import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: []
})
export class NumerosComponent implements OnInit {

  ventasNeta: number = 26547388873.9430;
  porcentaje: number = 0.48; 

  constructor() { }

  ngOnInit(): void {
  }

}
