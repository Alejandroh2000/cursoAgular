import { Component, Input } from '@angular/core';
import { Personajes } from '../interface/f1.interface';
import { Dbzservices } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {

  @Input() person: Personajes[] = [];

  constructor(private dbzService: Dbzservices){
    
  }


}
