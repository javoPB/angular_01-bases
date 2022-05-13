import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.Component.html',
    styleUrls: []
})
export class ContadorComponent {
    public titulo: string = 'Contador App.'
    public base = 5;
    public contador: number = 0;
  
    acumular = (base: number) => {
      this.contador += base;
    }
}