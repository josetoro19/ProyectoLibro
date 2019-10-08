import { Component, OnInit } from '@angular/core';
import { LibroService } from '../servicios/libro.service';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-librolist',
  templateUrl: './librolist.component.html',
  styleUrls: ['./librolist.component.css']
})
export class LibrolistComponent implements OnInit {

  libros:Libro[];

  constructor(private libroServicio:LibroService) { }


  ngOnInit() {
    this.libros = this.libroServicio.getlibros();
  }

}
