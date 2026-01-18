import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';
import { TaskPriority } from '../enums/task-priority.enum';


export class CreateTaskDto {
    @IsNotEmpty()
    title: string;
    
    @IsOptional()
    @IsString()
    description: string;

    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsEnum(TaskPriority)
    priority: TaskPriority;

    @IsNotEmpty()
    createdBy: string;

    @IsDateString()
    dueDate: string;
}