import { Component, OnInit} from '@angular/core';
import { House } from 'src/app/models/house/house.model';
import { HouseService } from 'src/app/services/house.service';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[] = [];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houses = this.houseService.getHouses();
  }
}
