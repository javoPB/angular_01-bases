import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent {
    public nombre: string = 'Ironman';
    public edad: number = 45;

    //Forma de definir los getter en las clases de angular.
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    //Mediante estos métodos se trabaja con el ONE WAY DATA BUILDING, es decir, cuando de modifica la información de las variables
    // nombre, edad, automaticamente se refresca la información contenida en los html donde se invoque las variables.
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }

}