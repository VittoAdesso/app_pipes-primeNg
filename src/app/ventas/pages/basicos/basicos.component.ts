import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent implements OnInit {

  nameLower: string = 'VITTORIO';
  nameUpper: string = 'vittorio';
  nameComplete: string = 'ViTtOrio ADeSsO'; 


  fecha: Date = new Date(); // hoy

  constructor() { }

  ngOnInit(): void {
  }

}
