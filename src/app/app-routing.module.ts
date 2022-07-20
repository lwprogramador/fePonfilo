import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { administradorComponent } from './modulos/diseño/administrador/administrador.component';
import { MonitoriarUrl, MonitoriarUrlHijos } from './utilidades/MonitoriarUrl';

const routes: Routes = [
  { path: '', redirectTo: 'app/incio_sesion', pathMatch: 'full' },
  {    
    path: 'app',
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modulos/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: 'backoffice',
    canActivate: [MonitoriarUrl],
    component: administradorComponent,
    canActivateChild: [MonitoriarUrlHijos],    
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modulos/diseño/administrador/administrador.module').then(m => m.AdministradorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
