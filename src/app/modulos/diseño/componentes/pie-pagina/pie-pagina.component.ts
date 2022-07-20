import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie-pagina',
  templateUrl: './pie-pagina.component.html'
})
export class PiePaginaComponent implements OnInit {
    test: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
