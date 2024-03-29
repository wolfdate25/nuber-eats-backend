import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { Verification } from './entities/verification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Verification]), ConfigService],
  providers: [UserService, UsersResolver],
  exports: [UserService],
})
export class UsersModule {}
