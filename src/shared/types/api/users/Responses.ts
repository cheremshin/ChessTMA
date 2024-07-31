import { TaskDTO } from "../tasks/TaskDTO";
import { UserDTO } from "./UserDTO";


export interface GetUsersResponse {
    users: UserDTO[];
}

export interface GetUserResponse {
    user: UserDTO;
}

export interface UpdateUserResponse {
    user: UserDTO;
}

export interface CreateUserResponse {
    user: UserDTO;
}

export interface SolvedTasksResponse {
    tasks: TaskDTO[];
}

export interface GetRandomTaskResponse {
    task: TaskDTO;
}
