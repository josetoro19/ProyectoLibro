
import { LibroAddComponent } from './libro-add/libro-add.component';
import { LibrolistComponent } from './librolist/librolist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'agregarLibro', component: LibroAddComponent },
  { path: 'listaLibro', component: LibrolistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }