import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SeguridadRoutes } from './seguridad-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PermisosComponent } from './permisos/permisos.component';
import { DatosAplicacionComponent } from './datosaplicacion/datosaplicacion.component';
import { Interceptor } from 'src/app/utilidades/InterceptorHTTP';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SeguridadRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule,
    NgbTooltipModule
  ],
  declarations: [
    UsuariosComponent,
    PermisosComponent,
    DatosAplicacionComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ]
})

export class SeguridadModule {}
