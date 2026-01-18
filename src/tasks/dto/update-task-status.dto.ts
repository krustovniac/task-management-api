import { IsEnum } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(['pending', 'in_progress', 'completed'])
  status: 'pending' | 'in_progress' | 'completed';
}