import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt.interfaces';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  constructor(
    @Inject('CONFIG_OPTIONS') private readonly options: JwtModuleOptions,
  ) {
    console.log(options);
  }
  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.options.secretKey);
  }
  verify(token: string) {
    return jwt.verify(token, this.options.secretKey);
  }
}
