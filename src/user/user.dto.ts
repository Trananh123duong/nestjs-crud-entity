import { IsEmail, MinLength } from 'class-validator';

export class UserDto {
  @MinLength(5)
  username: string;

  @IsEmail()
  email: string;
}
