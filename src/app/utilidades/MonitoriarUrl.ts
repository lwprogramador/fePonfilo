import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Location } from '@angular/common';
import { Ponfilo } from './Pronfilo.service';
import { validarCampoVacio } from './validaciones';

@Injectable()
export class MonitoriarUrl implements CanActivate {

    constructor(private ponfService: Ponfilo, private routerUrl: Router, private urlLocacion: Location) { }

    canActivate() {
        let tokenSesion = localStorage.getItem("TokenSesion");
        if (!validarCampoVacio(tokenSesion)) {
            this.ponfService.cerrarSesion();
            return false;
        }
        /*if (validarCampoVacio(tokenSesion)) {
            this.ponfService.redireccionarInicio();
            return true;
        }*/
        return true;
    }
}

@Injectable({
    providedIn: "root",
})
export class MonitoriarUrlHijos implements CanActivateChild {
    constructor(private ponfService: Ponfilo, private routerUrl: Router) { }
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let tokenSesion = localStorage.getItem("TokenSesion");
        if (!validarCampoVacio(tokenSesion)) {
            this.ponfService.cerrarSesion();
            return false;
        }
        return true;
    }
}