import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent implements OnInit {
  enMayuscula: boolean = true; 
  change(){
    this.enMayuscula = !this.enMayuscula;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
