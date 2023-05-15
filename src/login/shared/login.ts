import { Document } from 'mongoose'

export class Login extends Document {
    email: string;
    password: string
}
