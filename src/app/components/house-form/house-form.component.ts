import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HouseService } from 'src/app/services/house.service';
import { House } from 'src/app/models/house/house.model';
@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent{
  houseForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private houseService: HouseService) {
    this.houseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      location: ['', Validators.required]
    });
   }



  submitForm(value): void {
    if (this.houseForm.valid) {
      const house: House = {
        title: value.title,
        description: value.description,
        price: value.price,
        location: value.location
      };

      this.houseService.addHouse(house);
      this.houseForm.reset();
    }
  }
}
