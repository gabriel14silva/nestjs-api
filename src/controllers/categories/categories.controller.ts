import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get()
    getCategories(
      @Query('name') name: string,
    ) {
      return {
        message: `categories name=> ${name}`
      }
    }

    @Get('filter')
    getCategoryFilter() {
      return `Yo soy un filtro`;
    }

    @Get(':categoryId')
    getCategory(@Param('categoryId') categoryId: string) {
      return `category ${categoryId}`;
    }

    @Post()
    create(@Body() payload: any) {
      return {
        message: 'Accion de crear',
        payload,
      }
    }

}
