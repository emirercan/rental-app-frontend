import { Injectable } from '@angular/core';
import { House } from '../models/house/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  
  private houses: House[] = [];

  constructor() { }

  addHouse(house: House): void {
    this.houses.push(house);
  }

  getHouses(): House[] {
    return this.houses;
  }
}
