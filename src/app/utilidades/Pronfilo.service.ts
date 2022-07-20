import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { validarCampoVacio } from './validaciones';
import { ConexionHTTP, RespuestaHTTP } from './ConexionHTTP';
import { CONST_STORE } from './Constantes';

@Injectable({
    providedIn: 'root',
})
export class Ponfilo {
    public datosAplicacion: any;
    public datosTiposDocumento: any;

    constructor(private routerUrl: Router, private urlLocacion: Location, private servHTTP: ConexionHTTP) {

    }

    get tiposDocumento() {  
        if (validarCampoVacio(this.datosTiposDocumento))
            return this.datosTiposDocumento;
        else
            return [];
    }

    public cargarDatosAplicacion() {
        this.servHTTP.consultarDatos('datos/configuracion_aplicacion').then((consultaHTTP: any) => {            
            this.datosAplicacion = consultaHTTP;
            this.datosTiposDocumento = consultaHTTP['tposDocumentos'];
            this.routerUrl.navigate(['/backoffice']);
        });
    }

    public iniciarSesion(consultaHTTP: RespuestaHTTP) {
        if (consultaHTTP.consultaestado === true && validarCampoVacio(consultaHTTP.contenido['datosUsuario'])) {
            localStorage.setItem(CONST_STORE.DATOS_USUARIO, JSON.stringify(consultaHTTP.contenido['datosUsuario']));
            this.routerUrl.navigate(['/backoffice']);
        }
    }

    public cerrarSesion() {
        localStorage.clear();
        this.routerUrl.navigate(['/app/incio_sesion']);
    }

    public redireccionarInicio() {
        this.routerUrl.navigate(['/backoffice']);
    }
}



