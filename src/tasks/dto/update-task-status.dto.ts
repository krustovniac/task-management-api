import { IsEnum, IsIn } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';

export class UpdateTaskStatusDto {
  @IsIn(Object.values(TaskStatus))
  status: TaskStatus;
}