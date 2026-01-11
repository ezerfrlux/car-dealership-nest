import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Suzuki'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log({ id });
    const car = this.cars.find((car, i) => i === +id)
    return {
      id,
      car
    };
  }
}
