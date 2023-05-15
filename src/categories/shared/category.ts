import { Document } from 'mongoose'

export class Category extends Document {
    description: String;
    completed: boolean;
}
