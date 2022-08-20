import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent implements OnInit {

  name: string = 'Silvia'; 
  genero: string = 'femenino';

  invitacionMapa= {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
