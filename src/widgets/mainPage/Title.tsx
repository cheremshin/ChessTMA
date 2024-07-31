import useSampleAPI from "@/shared/hooks/useSmpleAPI";
import { widgetData } from "./Title.data";
import { useEffect, useState } from "react";

const Title = () => {
    const [data, setData] = useState("");
    const { fetchData, data: apiData } = useSampleAPI();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (apiData) {
            setData(apiData.fact);
        }
    }, [apiData]);

    return (
        <div className="
            font-semibold
            p-3
            pl-[32px]
            text-lg
            whitespace-pre-line
        ">
            { data }
        </div>
    );
};

export default Title;