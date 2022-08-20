import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  name: string = 'Silvia'; 
  genero: string = 'femenino';

  // mapa para trabajar, manejamos excepciones o posibles datos
  invitacionMapa= {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  cambiarCliente(){
    this.name = 'Aquiles';
    this.genero = 'masculino'
  }


  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Aquiles', 'José', 'Antonia']; 

  // mapa para trabajar, manejamos excepciones o posibles datos
  clentesMapa ={
    // si es igual a 0
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    '=3': 'tenemos tres clientes esperando.',
    // es lo mimso que un else el other y el # me cuenta el número de elmentos del array
    'other': 'tenemos # clientes esperando.'
  }

  // KeyValuePipe, obejtos literales 
  persona = {
    name: 'Hulk',
    age: 40,
    address: 'Hawai'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //JsonPipe
  heroe = [
    { name: 'Superman', 
      fly: 'false'}, 
    { name: 'Hulk', 
      fly: 'false'},
    { name: 'AquaMan', 
      fly: 'false'} 
  ]; 

  //Async Pipes

  // mediante observable
  miObservale = interval(1000); 
  // mediante promesa
  valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(() =>{
      resolve( 'Ready')
  }, 5000);
  }); 
  

  constructor() { /**empty**/}

  ngOnInit(): void {
    
  }

}
