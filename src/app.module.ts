import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './services/products.service';


@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, CustomersController, BrandsController, UsersController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
