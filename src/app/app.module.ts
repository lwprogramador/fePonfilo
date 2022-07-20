import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './modulos/diseño/componentes/componentes.module';
import { administradorComponent } from './modulos/diseño/administrador/administrador.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './utilidades/InterceptorHTTP';
import { Ponfilo } from './utilidades/Pronfilo.service';
import { MonitoriarUrl, MonitoriarUrlHijos } from './utilidades/MonitoriarUrl';

@NgModule({
  declarations: [
    AppComponent,
    administradorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentesModule,
    AppRoutingModule,
    NgSelectModule,
    NgbModule
  ],
  providers: [
    Ponfilo,
    MonitoriarUrl,
    MonitoriarUrlHijos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
