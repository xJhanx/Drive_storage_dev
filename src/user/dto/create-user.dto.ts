import { IsEmail, IsNotEmpty, isEmail, isEmpty,  } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  gender: string;
}
