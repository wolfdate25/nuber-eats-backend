import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateAccountInput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    try {
      // check the same account exist
      const exist = await this.users.findOne({ email });
      if (exist) {
        // make error
        return 'There is a user with that same email already';
      }
      // create account
      await this.users.save(this.users.create({ email, password, role }));
    } catch (e) {
      // make error
      return "Couldn't create account";
    }
  }
}