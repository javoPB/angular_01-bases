import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public heroeBorrado:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe = ():void => {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(`El hero eleiminado es: ${this.heroeBorrado}`);
  }

}
