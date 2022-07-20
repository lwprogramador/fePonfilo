import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mensajeInformativo, iconos } from 'src/app/utilidades/Alertas';
import { ConexionHTTP, RespuestaHTTP } from 'src/app/utilidades/ConexionHTTP';
import { Ponfilo } from 'src/app/utilidades/Pronfilo.service';
import { validarCampoVacio } from 'src/app/utilidades/validaciones';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [ConexionHTTP]
})
export class LoginComponent implements OnInit {

    public formularioLogin: FormGroup = this.formBuild.group({
        _url: ['inicio/web_login', Validators.required],
        _metodo: ['POST', Validators.required],
        //DATOS INICIO DE SESION 
        usuario: ['', Validators.required],
        clave: ['', Validators.required]
    });

    constructor(public formBuild: FormBuilder, private servHTTP: ConexionHTTP, private routerUrl: Router, private ponfService: Ponfilo) { }

    ngOnInit() {
        
    }

    public iniciarSesionWeb() {
        if (!this.formularioLogin.valid) {
            mensajeInformativo(iconos.WARNING, 'Debe ingresar su usuario y contraseña para poder iniciar sesión');
        } else {
            this.servHTTP.enviarFormulario(this.formularioLogin.value).then((consultaHTTP: RespuestaHTTP)=>{
                this.ponfService.iniciarSesion(consultaHTTP);
            });
            
        }
    }

}
