import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class CreateTaskDto {
    @IsNotEmpty()
    title: string;
    
    @IsOptional()
    @IsString()
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