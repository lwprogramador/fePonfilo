import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mensajeInformativo, iconos } from 'src/app/utilidades/Alertas';
import { ConexionHTTP, RespuestaHTTP } from 'src/app/utilidades/ConexionHTTP';
import { CONST_ICONOS } from 'src/app/utilidades/Constantes';
import { Ponfilo } from 'src/app/utilidades/Pronfilo.service';

@Component({
  selector: 'seguridad-permisos',
  templateUrl: './datosaplicacion.component.html',
  providers: [ConexionHTTP, Ponfilo]
})
export class DatosAplicacionComponent implements OnInit {
  public CONST_ICONOS = CONST_ICONOS;
  public formularioTpoDocumentos: FormGroup = this.formBuild.group({
    _url: ['datos/tipos_documentos', Validators.required],
    _metodo: ['POST', Validators.required],
    codigo: [''],
    descripcion: ['', Validators.required],
    abreviacion: ['', Validators.required],
    extranjero: [false, Validators.required],
    estado: [0, Validators.required],
    tiposdocumentos: this.formBuild.array([
      this.formBuild.group({
        codigo: '',
        descripcion: '',
        abreviacion: '',
        extranjero: false,
        estado: 0
      })
    ])
  });

  constructor(private servHTTP: ConexionHTTP, private ponfService: Ponfilo, public formBuild: FormBuilder) { }

  ngOnInit() {
    console.log(this.formularioTpoDocumentos.value, this.ponfService.tiposDocumento);
    this.formularioTpoDocumentos.patchValue({
      tiposdocumentos: this.ponfService.datosTiposDocumento
    });
    this.formularioTpoDocumentos.value;
  }

  public guardarTpoDocumento() {
    if (!this.formularioTpoDocumentos.valid) {
      mensajeInformativo(iconos.WARNING, 'Debe completar todos los campos');
    } else {
      this.servHTTP.enviarFormulario(this.formularioTpoDocumentos.value).then((consultaHTTP: RespuestaHTTP) => {

      });

    }
  }
}
