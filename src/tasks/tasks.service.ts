import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { randomUUID } from 'crypto';
import { TaskStatus } from './enums/task-status.enum';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    create(dto: CreateTaskDto): Task {
        const task: Task = {
        id: randomUUID(),
        title: dto.title,
        description: dto.description,
        status: dto.status,
        priority: dto.priority,
        createdBy: dto.createdBy,
        assignedTo: null,
        dueDate: new Date(dto.dueDate),
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    this.tasks.push(task);
        return task;
    }

    findAll(filters: any): Task[] {
        return this.tasks.filter(task => {
        if (filters.status && task.status !== filters.status) return false;
        if (filters.assignedTo && task.assignedTo !== filters.assignedTo) return false;
            return true;
        });
    }

    updateStatus(id: string, status: TaskStatus): Task {
        const task = this.tasks.find(t => t.id === id);
        if (!task) throw new NotFoundException('Tarea no encontrada');

        task.status = status;
        task.updatedAt = new Date();
        return task;
    }

    assign(id: string, userId: string): Task {
        const task = this.tasks.find(t => t.id === id);
        if (!task) throw new NotFoundException('Tarea no encontrada');


        task.assignedTo = userId;
        task.updatedAt = new Date();
        return task;
    }

    delete(id: string) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index === -1) throw new NotFoundException('Tarea no encontrada');
        this.tasks.splice(index, 1);
    }
}