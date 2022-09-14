import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { User } from './user/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Cart } from './products/entities/cart.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'relationship_db',
      entities: [User, Product, Cart],
      synchronize: true,
      dropSchema: false,
    }),
    UserModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
