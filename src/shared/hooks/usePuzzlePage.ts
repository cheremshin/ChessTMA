import { Task } from "@/shared/types/types";
import { getTask } from "@/stores/TaskStore";
import { useEffect } from "react";

type ReturnT = {
    task: Task;
};

const usePuzzlePage = (): ReturnT => {
    const task = getTask();

    return {
        task,
    };
};

export default usePuzzlePage;
