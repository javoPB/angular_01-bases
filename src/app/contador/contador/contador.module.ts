import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';

@NgModule({
    //Se declaran los componentes que se van a trabajar en el module
    declarations: [
        ContadorComponent
    ],
    //Se definen los componentes que serán visibles fuera del ámbito del module.
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {

}