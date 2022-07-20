import { Routes } from '@angular/router';
import { DatosAplicacionComponent } from './datosaplicacion/datosaplicacion.component';
import { PermisosComponent } from './permisos/permisos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


export const SeguridadRoutes: Routes = [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'permisos', component: PermisosComponent },
    { path: 'datos_aplicacion', component: DatosAplicacionComponent }
];
