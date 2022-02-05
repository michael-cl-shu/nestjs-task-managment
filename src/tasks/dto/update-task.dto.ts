import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task_model';
export class UpdateTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
