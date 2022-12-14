import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}


    // create new user logic 
    create(user: UserDto){
        return this.userRepository.save(user);
    }


    // update user via id logic 


    // get all users logic 

    
    // delete user via id  logic 
    async deleteUser(id: number): Promise<DeleteResult>{
        return await this.userRepository.delete(id);
    }


    // add products to cart logic 

}
