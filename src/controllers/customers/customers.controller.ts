import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get()
    getCustomers(
      @Query('name') name: string, 
      @Query('lastname') lastname: string, 
      @Query('phone') phone: number,
    ) {
      return {
          message: `customers name=> ${name} lastname=> ${lastname} phone=> ${phone}`,
      }
    }
  
    @Get('filter')
    getCustomerFilter() {
      return `Yo soy un filter`;
    }

    @Get(':customerId')
    getCustomer(@Param('customerId') customerId: string) {
      return `customer ${customerId}`;
    }

    @Post()
    create(@Body() payload: any) {
      return {
        message: `Accion de crear`,
        payload,
      }
    }
  

}
