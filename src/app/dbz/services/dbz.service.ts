import { Injectable } from "@angular/core";
import { Personajes } from "../interface/f1.interface";


@Injectable()
export class Dbzservices{
    
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

    constructor(){
        console.log('servicio inicializado');
    }
}