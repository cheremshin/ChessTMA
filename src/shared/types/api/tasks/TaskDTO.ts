export interface TaskDTO {
    id: string; 
    fen: string;
    init_step: string;
    uci?: string; 
    rating: number;
    rating_deviation: number;
}

