import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(
        @Query('email') email: string,
        @Query('password') password: string,
        @Query('role') role: string,
    ) {
        return {
            message: `users email=> ${email} password=> ${password} role=> ${role}`
        }
    }

    @Get('filter')
    getUserFilter() {
        return `Yo soy un filtro`;
    }

    @Get(':userId')
    getUser(@Param('userId') userId: string) {
        return `user ${userId}`;
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: `Accion de crear`,
            payload,
        }
    }
}
