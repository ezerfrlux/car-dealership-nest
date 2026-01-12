import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota ',
      model: 'Yaris',
    },
    {
      id: 2,
      brand: 'Honda ',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep ',
      model: 'Cherokee',
    },
    {
      id: 4,
      brand: 'Nissan',
      model: 'Magnite',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => id === car.id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
}
