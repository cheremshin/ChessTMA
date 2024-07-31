import { TaskDTO } from "./TaskDTO";

export interface GetTasksResponse {
    tasks: TaskDTO[];
}

export interface CreateTaskResponse {
    task: TaskDTO;
}

export interface GetTaskResponse {
    task: TaskDTO;
}

export interface UpdateTaskResponse {
    task: TaskDTO;
}

export interface SolveTaskResponse {
    delta_rating: number;
}

export interface GetTaskByTagResponse {
    tasks: TaskDTO;
}
