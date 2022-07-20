import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PiePaginaComponent
  ],
  exports: [
    PiePaginaComponent
  ]
})
export class ComponentesModule { }
