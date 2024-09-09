import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(username: string, password: string): Promise<any> {
    const user = await this.usersService.createUser(username, password);
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload);
    };
  }

  async login(username: string, password: string): Promise<any> {
    const user = await this.usersService.validateUser(username, password);
    if (!user) return null;
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload);
    };
  }
}
