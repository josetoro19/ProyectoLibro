import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor() { }

  add(libro: Libro) {
    let libros: Libro[] = [];
    if (localStorage.getItem('libros') != null) {
      libros = JSON.parse(localStorage.getItem('libros'));
    }
    libros.push(libro);
    localStorage.setItem('libros', JSON.stringify(libros));
    alert("se agregó");
  }
  getlibros(): Libro[] {
    return JSON.parse(localStorage.getItem('libros'));
  }
}
