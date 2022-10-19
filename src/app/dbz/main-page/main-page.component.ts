import { Component } from '@angular/core';
import { Personajes } from '../interface/f1.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

  person: Personajes[]=[
    {
      nombre: 'Redbull',
      potencia: 15000
    },
    {
      nombre: 'Ferrari',
      potencia: 3000
    }
  ]

  nuevo: Personajes ={
    nombre: 'Alpine',
    potencia: 20000
    
  }

  agregarPersonaje(argumento:Personajes){
    this.person.push(argumento)
    console.log('Main page Component');
  
  };
  
};
