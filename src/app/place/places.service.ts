import { Injectable } from '@angular/core';

@Injectable()
export class PlacesService {

  places = [
    {id: 1, name: 'Place One'},
    {id: 2, name: 'Place Two'},
  ]

  getPlaces() {
    return this.places;
  }

}
