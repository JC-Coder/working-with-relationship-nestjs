import { IsNotEmpty } from "class-validator";
import { Cart } from "src/products/entities/cart.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @ManyToOne(() => User, user => user.products, {onDelete: 'CASCADE'})
    user: User;

    @ManyToOne(() => Cart, cart => cart.products)
    cart: Cart;

}