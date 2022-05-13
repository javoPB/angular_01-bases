import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Se declaran los componentes que se van a trabajar en el module
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Se definen los componentes que serán visibles fuera del ambito del module.
    exports: [
        ListadoComponent
    ],
    //Se define el CommonModule requerido en el module que definimos.
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}