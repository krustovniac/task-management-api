import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
    export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    create(@Body() dto: CreateTaskDto) {
        return this.tasksService.create(dto);
    }

    @Get()
    findAll(@Query() query) {
        return this.tasksService.findAll(query);
    }

    @Patch(':id/status')
    updateStatus(@Param('id') id: string, @Body('status') status: string) {
        return this.tasksService.updateStatus(id, status);
    }

    @Patch(':id/assign')
    assign(@Param('id') id: string, @Body('userId') userId: string) {
        return this.tasksService.assign(id, userId);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.tasksService.delete(id);
        return { message: 'Tarea eliminada' };
    }
}