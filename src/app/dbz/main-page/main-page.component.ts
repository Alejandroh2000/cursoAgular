import { Component } from '@angular/core';

interface Personajes{
  nombre: string;
  potencia: number;

}

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

  nuevo: Personajes={
    nombre: '',
    potencia: 0
  }

 agregar(){

  if(this.nuevo.nombre.trim().length ===0){return}

  console.log(this.nuevo)

  this.person.push(this.nuevo);
  this.nuevo={
    nombre: '',
    potencia: 0
  }

 }
}
