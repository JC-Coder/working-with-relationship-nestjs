import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}


    // Create new user using post - with validation
    @Post()
    createUser(@Body() user: UserDto){
        return this.userService.create(user)
    }


    //  update user details via id 


    // get all users from db 


    // delete user via id 
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return await this.userService.deleteUser(id);
    }


    // add producs to cart 
}
