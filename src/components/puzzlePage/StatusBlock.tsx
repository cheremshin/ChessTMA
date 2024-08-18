import { useContext, useEffect } from "react";
import { BoardContext } from "@/widgets/puzzlePage/BoardContext";
import { SolveStatus } from "@/shared/types/board";
import { useUserData } from "@/app/context/userContext";
import { SolveTaskRequest } from "@/shared/types/api/tasks/Requests";
import { useFetch } from "@/shared/hooks/useFetch";
import { SolveTaskResponse } from "@/shared/types/api/tasks/Responses";


type Block = {
    text: string;
    color: string;
    bgColor: string;
};


const StatusBlock = () => {
    const { id } = useUserData();
    const { task_id, status } = useContext(BoardContext);

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

    const block: Block = {
        text: "",
        color: "",
        bgColor: "",
    };

    switch (status) {
        case SolveStatus.inProgress:
            block.text = "В процессе";
            block.bgColor = "#F9CC2B"
            block.color = "#292208"
            break;
        case SolveStatus.success:
            block.text = "Успешно";
            block.bgColor = "#82E024"
            block.color = "#15340E";
            break;
        case SolveStatus.fail:
            block.text = "Неудачно";
            block.bgColor = "#EA5736";
            block.color = "#48190F";
            break;        
    }


    return (
        <div className="w-full py-5 flex items-center justify-center">
            <div style={{
                    color: block.color,
                    backgroundColor: block.bgColor,
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                }}
            >
                {block.text}
            </div>
        </div>
    );
};

export default StatusBlock;