"use client"

import { useFetch } from "@/shared/hooks/useFetch";

import PuzzlePage from "@/pages/puzzlePage/page";
import { Task, TaskDTO } from "@/shared/types/api/tasks/TaskDTO";
import { useEffect, useState } from "react";
import { BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";
import { useUserData } from "../context/userContext";
import { redirect, useRouter } from "next/navigation";


const Page = () => {
    const router = useRouter();
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

    const handleRetry = () => {
        router.push("/");
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        router.push("/login");
    }

    if (!task) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-9">
                <p>Ошибка сервера</p>
                <button onClick={handleRetry} className="bg-black text-white rounded-lg p-2">
                    На главную
                </button>
            </div>
        );
    }

    return (
        <BoardContextProvider task={task}>
            <PuzzlePage />
        </BoardContextProvider>
    );
};

export default Page;