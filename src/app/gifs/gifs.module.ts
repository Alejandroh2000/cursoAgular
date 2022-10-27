import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagComponent } from './gifs-pag/gifs-pag.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPagComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GifsPagComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
