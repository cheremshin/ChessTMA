import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";
import { useUserData } from "@/app/context/userContext";
import { useFetch } from "@/shared/hooks/useFetch";

import { Header, Board, FinishScreen } from "@/widgets/puzzlePage";
import Navbar from "@/widgets/navbar/Navbar";
import StatusBlock from "@/components/puzzlePage/StatusBlock";
import LoadingSpinner from "@/widgets/loadingSpinner/LoadingSpinner";

import { Task } from "@/shared/types/api/tasks/TaskDTO";

const isValidUUID = (uuid: string): boolean => {
    const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return regex.test(uuid);
}

const PuzzlePage = () => {
    const router = useRouter();
    const { id } = useUserData();
    const [ task, setTask ] = useState<Task | null>(null);

    // Process pathname
    const pathname = usePathname() as string;
    const tag = pathname.split("/").pop() as string;

    const endpoint = isValidUUID(tag)
        ? `/users/${id}/random_task?theme_id=${tag}`
        : `/users/${id}/random_task`;
    
    // Prepare fetch
    const { data, isError, isLoading, fetchData } = useFetch<Task, Task>(endpoint);

    // Call fetch
    useEffect(() => {
        if (id) {
            console.log("Call fetch");
            fetchData((object: Task) => object).then();
        } else {
            router.push("/login");
        }
    }, [id]);

    // Set fetched data
    useEffect(() => {
        if (!isLoading && !isError && data) {
            setTask(data);
        }
    }, [isLoading]);

    const handleRetry = () => {
        router.push("/");
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return task && !isError ? (
        <BoardContextProvider task={task}>
            <Header />
            <StatusBlock />
            <Board />
            <FinishScreen />
            <Navbar />
        </BoardContextProvider>
    ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-9">
            <p>Не удалось загрузить задачу</p>
            <button onClick={handleRetry} className="bg-black text-white rounded-lg p-2">
                На главную
            </button>
        </div>
    );
};

export default PuzzlePage;
