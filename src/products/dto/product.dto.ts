import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class ProductDto {

    
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsNumberString()
    price: number;
}