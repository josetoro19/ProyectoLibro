import { Component, OnInit } from '@angular/core';
import { LibroService } from '../servicios/libro.service';
import { Libro } from '../models/libro';
@Component({
  selector: 'app-libro-add',
  templateUrl: './libro-add.component.html',
  styleUrls: ['./libro-add.component.css']
})
export class LibroAddComponent implements OnInit {

  libro:Libro;

  constructor(private libroServicio:LibroService) { }

  ngOnInit() {
    this.libro={isbn:0,titulo:"",precioVenta:0,popularidad:false};
    
  }
  add():void {
    this.libroServicio.add(this.libro);
  }

}
