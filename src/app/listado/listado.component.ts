import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //localhost:4200/
  alumnos=[
    {"nombre":"Juan"},
    {"nombre":"Francisco"}
  ];

  productos=["Coca cola","Arroz","atun","macarrones"];

  constructor() { }

  ngOnInit(): void {
  }

}
