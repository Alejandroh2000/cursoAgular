import { Injectable } from "@angular/core";
import { Personajes } from "../interface/f1.interface";


@Injectable()
export class Dbzservices{
    
   private _person: Personajes[]=[
        {
          nombre: 'Redbull',
          potencia: 15000
        },
        {
          nombre: 'Ferrari',
          potencia: 3000
        }
      ];

      get personajes(){
        return [...this._person]
      }

    constructor(){
        
    }

    agregarPersonaje(person:Personajes){
      this._person.push(person);
    }
}