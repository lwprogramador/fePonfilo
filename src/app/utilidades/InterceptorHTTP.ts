import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { iconos, mensajeInformativo } from './Alertas';
import { CONST_STORE } from './Constantes';
import { validarCampoVacio } from './validaciones';


@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let TokenSesion = '';
        if (validarCampoVacio(localStorage.getItem(CONST_STORE.TOKEN_SESION))) {
            TokenSesion = String(localStorage.getItem(CONST_STORE.TOKEN_SESION));
        }

        const authReq = req.clone({ headers: req.headers.set('-Token', TokenSesion) });

        return next.handle(authReq).pipe(
            tap(evt => {
                console.log(evt);
                if (evt instanceof HttpResponse) {
                    console.log(evt.body);
                    if (evt.headers.has('-Token')) {
                        localStorage.setItem(CONST_STORE.TOKEN_SESION, String(evt.headers.get('-Token')));
                    }
                    if (evt.body)
                        if (validarCampoVacio(evt.body['mensaje']))
                            mensajeInformativo(iconos.SUCCESS, evt.body['mensaje']);
                }
            }),
            catchError((err: any) => {
                console.log(err);
                if (err instanceof HttpErrorResponse) {
                    try {
                        if (validarCampoVacio(err.error['mensaje']))
                            mensajeInformativo(iconos.ERROR, err.error['mensaje']);
                    } catch (e) {
                        mensajeInformativo(iconos.ERROR, 'Ha ocurrido un error interno la aplicacion');
                    }
                }
                return of(err);
            }));
    }
}