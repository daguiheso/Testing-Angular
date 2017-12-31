import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { PlacesService } from './places.service';

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
  // porbar que el componente y el servicio tengan los mismos places
  it('should have the same places as the service', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    // obteniendo el servicio
    let placeService = fixture.debugElement.injector.get(PlacesService);
    expect(app.places).toEqual(placeService.places);
  })
});
