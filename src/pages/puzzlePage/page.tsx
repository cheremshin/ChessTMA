import { useUserData } from "@/app/context/userContext";
import StatusBlock from "@/components/puzzlePage/StatusBlock";
import { useFetch } from "@/shared/hooks/useFetch";
import { SolveTaskRequest } from "@/shared/types/api/tasks/Requests";
import { SolveTaskResponse } from "@/shared/types/api/tasks/Responses";
import { SolveStatus } from "@/shared/types/board";
import Navbar from "@/widgets/navbar/Navbar";
import { Board } from "@/widgets/puzzlePage/Board";
import { BoardContext, BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";
import FinishScreen from "@/widgets/puzzlePage/FinishScreen";
import Header from "@/widgets/puzzlePage/Header";
import { useContext, useEffect } from "react";


const PuzzlePage = () => {
    const { task_id, status } = useContext(BoardContext);
    const { id } = useUserData();

    const body: SolveTaskRequest = {
        user_id: id,
        task_id,
        result: false,
    };

    const { data, fetchData } = useFetch<SolveTaskResponse, SolveTaskResponse, SolveTaskRequest>("/tasks/solve", "POST", body);

    useEffect(() => {
        if (status == SolveStatus.fail) {
            fetchData((object: SolveTaskResponse) => object).then();
        } else if (status == SolveStatus.success) {
            body.result = true;
            fetchData((object: SolveTaskResponse) => object).then();
        }
    }, [status]);

    return (
        <>
            <Header />
            <StatusBlock />
            <Board />
            <FinishScreen />
            <Navbar />
        </>
    );
};

export default PuzzlePage;
