import { Category } from './shared/category';
import { CategoryService } from './shared/category.service';
export declare class CategoriesController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<Category[]>;
    getById(id: string): Promise<Category>;
    create(Category: Category): Promise<Category>;
    update(id: string, task: Category): Promise<Category>;
    delete(id: string): Promise<void>;
}
