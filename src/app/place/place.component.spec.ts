import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';

describe('PlaceComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent]
    })
  })

  it('should create the app', () => {
    // creando componente
    let fixture = TestBed.createComponent(PlaceComponent);
    // creando instancia de componente
    let app = fixture.debugElement.componentInstance;
    // validando que exista componente
    expect(app).toBeTruthy();
  })
});
