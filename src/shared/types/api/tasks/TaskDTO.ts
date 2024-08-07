export interface TaskDTO {
    task: Task;
}

export interface Task {
    id: string; 
    fen: string;
    init_step: string;
    uci?: string; 
    rating: number;
    rating_deviation: number;
}
