import { Component } from '@angular/core';
import { Personajes } from '../interface/f1.interface';
import { Dbzservices } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {
  
  nuevo: Personajes ={
    nombre: 'Alpine',
    potencia: 20000
    
  }

  person: Personajes[]=[];

 

  constructor(){
    
  }
  
};
