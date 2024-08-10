"use client";

import { useUserData } from "@/app/context/userContext";
import PuzzlePage from "@/pages/puzzlePage/page";
import { useFetch } from "@/shared/hooks/useFetch";
import { Task } from "@/shared/types/api/tasks/TaskDTO";
import { BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Page = () => {
    const pathname = usePathname();
    const tag = pathname?.split("/").pop();

    const router = useRouter();
    const { id } = useUserData();
    const [ task, setTask ] = useState<Task | null>(null);

    const { data, isError, isLoading, fetchData } = useFetch<Task, Task>(`/users/${id}/random_task?theme_id=${tag}`);

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
}

export default Page;