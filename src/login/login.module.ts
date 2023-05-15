import { Mongoose } from 'mongoose';
import { Module } from '@nestjs/common';
import { LoginService } from './shared/login.service';
import { LoginController } from './login.controller';
import { LoginSchema } from './schemas/login.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Login', schema: LoginSchema}])
    ],
    controllers: [LoginController],
    providers: [LoginService]
})
export class LoginModule { }
