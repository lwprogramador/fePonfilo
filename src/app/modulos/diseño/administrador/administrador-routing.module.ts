import { Routes } from '@angular/router';
import { InicioComponent } from '../../inicio/inicio.component';
import { PermisosComponent } from '../../seguridad/permisos/permisos.component';
import { UsuariosComponent } from '../../seguridad/usuarios/usuarios.component';


export const administradorRoutes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },    
    {
        path: 'seguridad',        
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
          }
        ]
      }
];
