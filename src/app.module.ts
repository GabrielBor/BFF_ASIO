import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    TasksModule, CategoriesModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
