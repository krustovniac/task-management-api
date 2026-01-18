import { TaskStatus } from "./enums/task-status.enum";

//export type TaskStatus = 'pending' | 'in_progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';


export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    assignedTo: string | null;
    createdBy: string;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}