import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { administradorRoutes } from './administrador-routing.module';
import { InicioComponent } from '../../inicio/inicio.component';
import { Interceptor } from 'src/app/utilidades/InterceptorHTTP';
import { ConexionHTTP } from 'src/app/utilidades/ConexionHTTP';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(administradorRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    InicioComponent
  ],
  providers: [
    ConexionHTTP,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ]
})

export class AdministradorModule {}
