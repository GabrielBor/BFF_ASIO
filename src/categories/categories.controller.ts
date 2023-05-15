import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Category } from './shared/category';
import { CategoryService } from './shared/category.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoryService:CategoryService) { }

    @Get()
    async getAll(): Promise<Category[]> {
        return this.categoryService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Category> {
        return this.categoryService.getById(id);
    }

    @Post()
    async create(@Body() Category: Category): Promise<Category> {
        return this.categoryService.create(Category)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: Category): Promise<Category> {
        return this.categoryService.update(id, task)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.categoryService.delete(id)
    }
}
