import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class ProductDto {
    name: string;
    description: string;
    price: number;
    userId: number;
}