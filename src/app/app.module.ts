import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibroService } from './servicios/libro.service';
import { AppComponent } from './app.component';
import { LibroAddComponent } from './libro-add/libro-add.component';
import { LibrolistComponent } from './librolist/librolist.component';
import { LibroEliminarEditarComponent } from './libro-eliminar-editar/libro-eliminar-editar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LibroAddComponent,
    LibrolistComponent,
    LibroEliminarEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
