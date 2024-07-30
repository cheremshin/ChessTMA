import { useContext } from "react";
import { BoardContext } from "@/widgets/puzzlePage/BoardContext";
import { SolveStatus } from "@/shared/types/board";


type Block = {
    text: string;
    color: string;
    bgColor: string;
};


const StatusBlock = () => {
    const { status } = useContext(BoardContext);
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