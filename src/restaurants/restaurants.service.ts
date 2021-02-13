import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}

  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  createRestarant(
    createRestaurantsDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const newRestarant = this.restaurants.create(createRestaurantsDto);
    return this.restaurants.save(newRestarant);
  }
}
