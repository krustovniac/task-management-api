import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';


export class CreateTaskDto {
    @IsNotEmpty()
    title: string;
    
    @IsOptional()
    @IsString()
    description: string;

    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsEnum(['low', 'medium', 'high'])
    priority: 'low' | 'medium' | 'high';

    @IsNotEmpty()
    createdBy: string;

    @IsDateString()
    dueDate: string;
}