import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>, @InjectRepository(User) private userRepository: Repository<User>){}


    // create new product logic 
    async createProd(item: ProductDto): Promise<any>{
        // firstly we find the user to be assigned a product to 
        const user = await this.userRepository.findOneBy({id: item.userId})

        const product = this.productRepository.create(item)
        product.user = user;
        

        return await  this.productRepository.save(product);
    }


    // update product via id logic 


    // get all products logic 


    // delete product via id logic  

    // get  a user products via id 

}
