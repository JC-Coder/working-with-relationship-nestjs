import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}


    // Create new user using post - with validation


    //  update user details via id 


    // get all users from db 


    // delete user via id 
}
