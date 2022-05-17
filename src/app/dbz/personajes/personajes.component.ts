import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //Con la anotación @Input() indicamos que la información de personajes proviene de componente padre.
  @Input('personajes')
  public personajes: Personaje[] = [];

}
