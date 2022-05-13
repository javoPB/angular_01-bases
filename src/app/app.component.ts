import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = 'Contador App.'
  public base = 5;
  public contador: number = 0;

  acumular = (base: number) => {
    this.contador += base;
  }
}

