import { Body, Controller, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    // create new product with validation 
    @Post()
    createProduct(@Body() item: ProductDto){
        return this.productService.createProd(item)
    }


    // update product details via id 


    // get all products 


    // delete product via id 

    // get  a user products via id 
}
