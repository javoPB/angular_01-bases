import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input('personajes')
  personajes: Personaje[] = [];

  @Input('nuevo')
  nuevo: Personaje = {
    nombre: 'Prueba',
    poder: 0
  }

  @Output()
  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar = (): void => {
    if( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    this.personajes.push(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);

    //Para no afectar los objetos ya almacenados, se genera una nueva instancia de "nuevo"
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
