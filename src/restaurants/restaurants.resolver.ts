import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { createRestaurantDto } from './dtos/create-restaurant.dto';

@Resolver()
export class RestaurantsResolver {
  @Query((returns) => [Restaurant])
  myRestaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);
    return [];
  }

  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantsDto: createRestaurantDto) {
    console.log(createRestaurantsDto);
    return true;
  }
}
