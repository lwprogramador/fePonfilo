import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionHTTP } from 'src/app/utilidades/ConexionHTTP';
import { Ponfilo } from 'src/app/utilidades/Pronfilo.service';
import { CONST_ICONOS, CONST_URL } from '../../../utilidades/Constantes';

@Component({
  selector: 'seguridad-usuarios',
  templateUrl: './usuarios.component.html',
  providers: [ConexionHTTP, Ponfilo]
})
export class UsuariosComponent implements OnInit {
  public CONST_ICONOS = CONST_ICONOS;
  public formularioUsuario: FormGroup = this.formBuild.group({
    _url: ['seguridad/usuario', Validators.required],
    _metodo: ['PUT', Validators.required],
    //PERSONA
    entCodigo: [''],
    entEstado: [true, Validators.required],
    entUrlAvatar: ['CONST.NO_IMAGEN', Validators.required],
    entNombre: ['', Validators.required],
    entApellido: ['', Validators.required],
    entTpoDocumento: ['', Validators.required],
    entDocumento: ['', Validators.required],
    entFeNacimiento: ['', Validators.required],
    entSexo: ['', Validators.required],
    //USUARIO
    usrCodigo: ['', Validators.required],
    usrEstado: ['', Validators.required],
    usrUsuario: ['', Validators.required],
    usrClave: ['', Validators.required],
    usrConfClave: ['', Validators.required],
  });

  public tpoDocumento: any = [];

  constructor(private servHTTP: ConexionHTTP, private ponfService: Ponfilo, public formBuild: FormBuilder) { }

  ngOnInit() {
    this.tpoDocumento = this.ponfService.tiposDocumento;   
    console.log(this.ponfService.datosTiposDocumento); 
  }

  public guardarDatosUsuario() {

  }

}
