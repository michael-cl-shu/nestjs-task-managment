import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task_model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const result = this.tasks.find((task) => task.id === id);
    console.log(result);
    return result;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): Task {
    const task = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    if (!task) {
      return null;
    } else {
      task.status = status;
      return task;
    }
  }
}
