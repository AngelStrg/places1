import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/place.interface';
import { PlacesService } from '../../services/places.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-place-list',
  imports: [CommonModule],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css'
})
export class PlaceListComponent implements OnInit {

  places: Place[];

  constructor(
    private placesService: PlacesService
  ) {
    this.places = [{
      name: '',
      description: '',
      latitude: 0,
      longitude: 0,
      image: ''
    }];
  }
  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }
  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlace(place);
    console.log(response);
  }
}
