
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {


    @Get()
    getBrands(
        @Query('name') name: string,
        @Query('image') image: string,
    ) {
        return {
            message: `brands name=> ${name}`
        }
    }

    @Get('filter')
    getBrandFilter() {
        return `Yo soy un filtro`;
    }

    @Get(':brandId')
    getBrand(@Param('brandId') brandId: string) {
        return `brand ${brandId}`;
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Accion de crear',
            payload,
        }
    }

}
