import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    getBrands(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return {
            message: `brands limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
        }
    }

    @Get('filter')
    getBrandFilter() {
        return `Yo soy un filter`;
    }

    @Get(':brandId')
    getBrand(@Param('brandId') brandId: string) {
        return `brand ${brandId}`;
    }

    @Post()
    create(@Body() payload:any) {
        return {
            message: 'Accion de crear',
            payload,
        }
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
