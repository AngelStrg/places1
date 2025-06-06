import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PlacesService } from '../../services/places.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Place } from '../../models/place.interface';

@Component({
  selector: 'app-new-place',
  imports: [ReactiveFormsModule],
  templateUrl: './new-place.component.html',
  styleUrl: './new-place.component.css'
})
export class NewPlaceComponent {

  formulario : FormGroup;

  constructor(
    private placesService: PlacesService
  ){
    this.formulario = new FormGroup({
      name  : new FormControl(),
      longitude  : new FormControl(),
      latitude  : new FormControl(),
      description  : new FormControl(),
      image  : new FormControl(),
    });
  }
  ngOnInit(): void {

  }
  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
    console.log('🟡 Enviando formulario...');
    console.log(this.formulario.value);
  }
}
