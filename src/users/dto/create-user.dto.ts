import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['admin', 'user'])
    role: 'admin' | 'user';
}