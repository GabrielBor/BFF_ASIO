import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories.controller';
import { CategorySchema } from './schemas/category.schema';
import { CategoryService } from './shared/category.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema}])
    ],
    controllers: [CategoriesController],
    providers: [CategoryService]
})
export class CategoriesModule {}
