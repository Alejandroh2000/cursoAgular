import { Component, Input } from '@angular/core';
import { Personajes } from '../interface/f1.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {

  @Input() person: Personajes[] = [];

}
