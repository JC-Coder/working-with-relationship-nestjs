import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    name: string;
    email: string;
}