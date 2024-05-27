import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dtos/create-task-dto';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(TaskEntity) private taskRepository: Repository<TaskEntity>) {};

    async findAll() { 
        return await this.taskRepository.find();
    };

    async create(createTaskDto: CreateTaskDto) {
        const task = this.taskRepository.create(createTaskDto);
        return await this.taskRepository.save(task);
    }
}
