import { IsNotEmpty } from "class-validator";
import { Cart } from "src/cart/entities/cart.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Product, product => product.user)
    products: Product[];

    @OneToOne(() => Cart, cart => cart.user)
    cart: Cart;
}