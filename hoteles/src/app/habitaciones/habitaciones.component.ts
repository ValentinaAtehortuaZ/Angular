import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  //atributos
  titulo: String = "Habiataciones"

  //arreglo de 10 objetos
  habitaciones: any[] = [
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    {
      nombre: "",
      foto: "",
      descripcion:"",
      precio:500000
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
