import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    // create new product with validation 


    // update product details via id 


    // get all products 


    // delete product via id 
}
