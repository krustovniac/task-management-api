import { IsDateString, IsEnum, IsNotEmpty } from 'class-validator';


export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    description: string;

    @IsEnum(['pending', 'in_progress', 'completed'])
    status: 'pending' | 'in_progress' | 'completed';

    @IsEnum(['low', 'medium', 'high'])
    priority: 'low' | 'medium' | 'high';

    @IsNotEmpty()
    createdBy: string;

    @IsDateString()
    dueDate: string;
}