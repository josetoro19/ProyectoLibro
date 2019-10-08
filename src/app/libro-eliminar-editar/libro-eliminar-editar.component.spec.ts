import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroEliminarEditarComponent } from './libro-eliminar-editar.component';

describe('LibroEliminarEditarComponent', () => {
  let component: LibroEliminarEditarComponent;
  let fixture: ComponentFixture<LibroEliminarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroEliminarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroEliminarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
