import { Injectable } from '@nestjs/common';
import { Login } from './login';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class LoginService {

    constructor(@InjectModel('Login') private readonly loginModel: Model<Login>) { }

    async getAll() {
        return await this.loginModel.find().exec()
    }

    async validateUser(login: Login): Promise<any> {
        const { email, password } = login
        const value = await this.loginModel.findOne({ email, password }).exec()
        if (value) {
            return value
        } else throw new Error
        // const user = await this.loginModel.findOne({ email });
        // if (email) {
        //   const { password, ...result } = user.toObject();
        //   return result;
        // return 'sim';
        // }
        // return 'nao';
    }

    // async getByEmail(login: Login) {
    //     return {login}
    //     return await this.loginModel.findOne(item => login === item ).exec()
    // }

    async create(login: Login) {
        const createUser = new this.loginModel(login)
        return await createUser.save()
    }

    // async update(id: string, task: Task) {
    //     await this.taskModel.updateOne({_id: id}, task).exec()
    //     return this.getById(id)
    // }

    // async delete(id: string) {
    //     return await this.taskModel.deleteOne({_id: id}).exec()
    // }
}
