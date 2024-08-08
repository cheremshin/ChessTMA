import { Chess } from "chess.js";


export type BoardSide = "white" | "black";

export enum SolveStatus {
    inProgress,
    success,
    fail,
};

/**
 * @param fen Строка расстановки фигур
 * @param solve Последовательность ходов игрока для успешного прохождения
 * @param aiSteps Ходы компьютера при правильной последовательности ходов
 * @param side Сторона за которую играет игрок
 * @param rating Рейтинг задачи
 * @param status Статус прохождения пазла
 * @param setStatus Мутатор статуса
 */
export type Game = {
    task_id: string;
    fen: string;
    solve: string[];
    aiSteps: string[];
    side: BoardSide;
    rating: number;
    status: SolveStatus;
    setStatus: (status: SolveStatus) => void;
    completed: boolean
    setCompleted: (status: boolean) => void;
};
