import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class createRestaurantDto {
  @Field((type) => String)
  @IsString()
  name: string;
  @Field((type) => Boolean)
  @IsBoolean()
  isVegan: boolean;
  @Field((type) => String)
  @IsString()
  address: string;
  @Field((type) => String)
  @IsString()
  @Length(4, 10)
  ownerName: string;
}
