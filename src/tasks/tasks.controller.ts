import { Body, Controller, Delete, Get, Param, Post, Put, Redirect } from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';

@Controller('tasks/')
export class TasksController {

    constructor(private tasksService: TaskService) { }

    @Get(':categoryId/')
    // @Redirect('https://nestjs.com', 200)
    async getAll(){
        return this.tasksService.getAll()
    }

    // @Get(':id')
    // async getById(@Param('id') id: string): Promise<Task> {
    //     return this.tasksService.getById(id);
    // }

    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.tasksService.create(task)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
        return this.tasksService.update(id, task)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.tasksService.delete(id)
    }

}
