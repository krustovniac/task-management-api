import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    create(dto: CreateUserDto): User {
        if (this.users.some(u => u.email === dto.email)) {
            throw new BadRequestException('Email ya existe');
    }

    const user: User = {
        id: randomUUID(),
        ...dto,
        createdAt: new Date(),
    };

    this.users.push(user);
        return user;
    }

    findAll(): User[] {
        return this.users;
    }

    findOne(id: string): User {
        const user = this.users.find(u => u.id === id);
        if (!user) throw new NotFoundException('Usuario no encontrado');
        return user;
    }
}