import { IsEmail, MinLength } from 'class-validator';

export class UserDto {
  @MinLength(5)
  name: string;

  @IsEmail()
  email: string;
}
