import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrolistComponent } from './librolist.component';

describe('LibrolistComponent', () => {
  let component: LibrolistComponent;
  let fixture: ComponentFixture<LibrolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
