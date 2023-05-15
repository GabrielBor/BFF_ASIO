import { Body, Controller, Delete, Get, Param, Post, Put, Redirect } from '@nestjs/common';
import { Login } from './shared/login';
import { LoginService } from './shared/login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService) { }

    @Get()
    // @Redirect('https://nestjs.com', 200)
    async getAll(){
        return this.loginService.getAll()
    }

    @Post()
    async getById(@Body() login: Login): Promise<any> {
        return this.loginService.validateUser(login);
    }

    @Post('create')
    async create(@Body() login: Login): Promise<Login> {
        return this.loginService.create(login)
    }

    // @Put(':id')
    // async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    //     return this.tasksService.update(id, task)
    // }

    // @Delete(':id')
    // async delete(@Param('id') id: string) {
    //     this.tasksService.delete(id)
    // }

}
