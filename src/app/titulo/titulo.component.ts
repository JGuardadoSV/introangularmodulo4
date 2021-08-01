import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo', //<app-titulo> </app-titulo>
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  titulo="Componente 1";

  
  constructor() { }

  ngOnInit(): void {
  }

}
