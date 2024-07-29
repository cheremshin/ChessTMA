import { Puzzle } from "@/shared/types/types";
import { getTask } from "@/stores/TaskStore";
import { useEffect } from "react";

type ReturnT = {
    task: Puzzle;
};

const usePuzzlePage = (): ReturnT => {
    const task = getTask();

    return {
        task,
    };
};

export default usePuzzlePage;
