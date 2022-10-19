import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interface/f1.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {

  @Input() nuevo: Personajes={
    nombre: '',
    potencia: 0
  }

  @Output() OnNuevoPersonaje: EventEmitter <Personajes>= new EventEmitter();

 agregar(){
  if(this.nuevo.nombre.trim().length ===0){return;}

  console.log(this.nuevo);
  this.OnNuevoPersonaje.emit(this.nuevo);

 
  this.nuevo={
    nombre: '',
    potencia: 0
  }

 }

}
