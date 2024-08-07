"use client"

import { useFetch } from "@/shared/hooks/useFetch";

import PuzzlePage from "@/pages/puzzlePage/page";
import { Task, TaskDTO } from "@/shared/types/api/tasks/TaskDTO";
import { useEffect, useState } from "react";
import { BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";
import { useUserData } from "../context/userContext";


const Page = () => {
    const { id } = useUserData();
    const [ task, setTask ] = useState<Task | null>(null);

    const { data, isError, isLoading, fetchData } = useFetch<Task, Task>(`/users/${id}/random_task`);

    useEffect(() => {
        fetchData((object: Task) => object).then();
    }, []);

    useEffect(() => {
        if (!isLoading && !isError && data) {
            setTask(data);
        }
    }, [isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading task</div>;
    }

    if (!task) {
        return <div>No task available</div>;
    }

    return (
        <BoardContextProvider task={task}>
            <PuzzlePage />
        </BoardContextProvider>
    );
};

export default Page;