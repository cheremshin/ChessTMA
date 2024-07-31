export interface CreateTaskRequest {
    fen: string;
    init_step: string;
    rating: number;
    rating_deviation: number;
}

export interface UpdateTaskRequest {
    fen: string;
    init_step: string;
    uci: string;
    rating: number;
    rating_deviation: number;
}

export interface SolveTaskRequest {
    user_id: number;
    task_id: string;
    result: boolean;
}
