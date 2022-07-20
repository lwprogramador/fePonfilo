import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { validarCampoVacio } from 'src/app/utilidades/validaciones';
import { Ponfilo } from 'src/app/utilidades/Pronfilo.service';
import { ConexionHTTP } from 'src/app/utilidades/ConexionHTTP';

@Component({
  selector: 'dis-administrador',
  templateUrl: './administrador.component.html',
  providers: [ConexionHTTP, Ponfilo]
})
export class administradorComponent implements OnInit {
  public rutaDet: any = [];
  constructor(private url: Router, private urlLocacion: Location, private ponfService: Ponfilo) {

  }

  ngOnInit() {
    this.ponfService.cargarDatosAplicacion();

    let urlString = 'BACKOFFICE/INICIO';
    this.url.events.subscribe((val) => {
      if (this.urlLocacion.path() != '') {
        urlString = (this.urlLocacion.path()).toUpperCase();
      } else {
        urlString = 'BACKOFFICE/INICIO'
      }
      if (validarCampoVacio(urlString))
        this.rutaDet = urlString.split('/');
    });
    if (this.rutaDet.length === 0)
      this.rutaDet = urlString.split('/');
  }

  public cerrarSesion() {
    this.ponfService.cerrarSesion();
  }

}
