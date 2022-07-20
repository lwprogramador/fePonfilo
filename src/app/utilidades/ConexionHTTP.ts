import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConexionHTTP {

    constructor(private servHTTP: HttpClient) {

    }

    public enviarFormulario(Formulario: any | Object): Promise<any> {
        return new Promise((OK, ERROR) => {
            let urlEnvio = environment.urlApi;
            let metodoEnvio = 'POST';
            let formEnvio: any = {};
            for (var llave in Formulario) {
                if (!Formulario.hasOwnProperty(llave)) {
                    continue;
                }
                if (Formulario.hasOwnProperty(llave) && llave === '_url') {
                    urlEnvio += Formulario[llave];
                    continue;
                }
                if (Formulario.hasOwnProperty(llave) && llave === '_metodo') {
                    metodoEnvio = Formulario[llave];
                    continue;
                }
                formEnvio[llave] = Formulario[llave];
            }

            //CUANDO SE ENVIA POR MEDIO DEL MULTIPAR SE DEBE ELIMINAR EL ENCABEZADO DE CONTENT-TYPE POR QUE DA ERRO EN JAVA
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=UTF-8');
            headers = headers.set('Accept', 'application/json');
            headers = headers.set('dataType', 'json');
            switch (metodoEnvio) {
                case 'PUT':
                    this.servHTTP.put(urlEnvio, formEnvio, { observe: 'events', reportProgress: true, headers }).subscribe(event => {
                        if (event.type === HttpEventType.DownloadProgress) {
                            console.log(event.loaded); //downloaded bytes
                            console.log(event.total); //total bytes to download
                        }
                        if (event.type === HttpEventType.UploadProgress) {
                            console.log(event.loaded); //uploaded bytes
                            console.log(event.total); //total bytes to upload
                        }
                        if (event.type === HttpEventType.Response) {
                            OK(event.body);
                        }
                    });
                    break;
                case 'POST':
                    this.servHTTP.post(urlEnvio, formEnvio, { observe: 'events', reportProgress: true, headers }).subscribe(event => {
                        if (event.type === HttpEventType.DownloadProgress) {
                            console.log(event.loaded); //downloaded bytes
                            console.log(event.total); //total bytes to download
                        }
                        if (event.type === HttpEventType.UploadProgress) {
                            console.log(event.loaded); //uploaded bytes
                            console.log(event.total); //total bytes to upload
                        }
                        if (event.type === HttpEventType.Response) {
                            OK(event.body);
                        }
                    });
                    break;
                default:
                    ERROR('Metodo de envio no soportado');
            }
        });
    }

    public consultarDatos(Url: string) {
        return new Promise((OK, ERROR) => {
            let urlEnvio = environment.urlApi;
            if (Url !== '') {
                urlEnvio += Url;
            }
            //CUANDO SE ENVIA POR MEDIO DEL MULTIPAR SE DEBE ELIMINAR EL ENCABEZADO DE CONTENT-TYPE POR QUE DA ERROR EN JAVA
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=UTF-8');
            headers = headers.set('Accept', 'application/json');
            headers = headers.set('dataType', 'json');

            this.servHTTP.get(urlEnvio, { observe: 'events', reportProgress: true, headers }).subscribe(event => {
                if (event.type === HttpEventType.DownloadProgress) {
                    console.log(event.loaded); //downloaded bytes
                    console.log(event.total); //total bytes to download
                }
                if (event.type === HttpEventType.UploadProgress) {
                    console.log(event.loaded); //uploaded bytes
                    console.log(event.total); //total bytes to upload
                }
                if (event.type === HttpEventType.Response) {
                    OK(event.body);
                }
            });
        });
    }

}


export interface RespuestaHTTP {
    codigoestado: number
    consultaestado: boolean
    contenido: any
    mensaje: string
} 