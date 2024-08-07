import { widgetData } from "./Title.data";


const Title = () => {
    return (
        <div className="
            font-semibold
            p-3
            pl-[32px]
            text-lg
            whitespace-pre-line
        ">
            { widgetData.title }
        </div>
    );
};

export default Title;