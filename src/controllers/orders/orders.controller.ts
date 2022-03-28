import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    
    @Get()
    getCustomers(
      @Query('limit') limit = 100, 
      @Query('offset') offset = 0, 
      @Query('brand') brand: string,
    ) {
      return {
          message: `orders limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
      }
    }
  
    @Get('filter')
    getOrderFilter() {
      return `Yo soy un filter`;
    }
  
    @Get(':customerId')
    getOrder(@Param('customerId') customerId: string) {
      return `order ${customerId}`;
    }

    @Post()
    create(@Body() payload:any) {
        return {
            message: 'accion de crear',
            payload,
        };
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
      return {
        id,
        payload,
      };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
      return id;
    }
}
