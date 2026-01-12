import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid'
@Injectable()
export class CarsService {
  private cars:Car[] = [
    {
      id: uuid(),
      brand: 'Toyota ',
      model: 'Yaris',
    },
    {
      id: uuid(),
      brand: 'Honda ',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep ',
      model: 'Cherokee',
    },
    {
      id: uuid(),
      brand: 'Nissan',
      model: 'Magnite',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => id === car.id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }


}
