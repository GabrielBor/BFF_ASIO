import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category';

@Injectable()
export class CategoryService {

    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) { }

    async getAll() {
        return await this.categoryModel.find().exec()
    }

    async getById(id: string) {
        return await this.categoryModel.findById(id).exec()
    }

    async create(category: Category) {
        const createdCategory = new this.categoryModel(category)
        return await createdCategory.save()
    }

    async update(id: string, task: Category) {
        await this.categoryModel.updateOne({_id: id}, task).exec()
        return this.getById(id)
    }

    async delete(id: string) {
        return await this.categoryModel.deleteOne({_id: id}).exec()
    }
}
