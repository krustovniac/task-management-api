import { TaskPriority } from "./enums/task-priority.enum";
import { TaskStatus } from "./enums/task-status.enum";

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