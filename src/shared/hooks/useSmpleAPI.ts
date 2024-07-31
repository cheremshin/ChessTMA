'use client';

import { useCallback, useEffect, useState } from "react";

interface CatFact {
    fact: string;
}

const useSampleAPI = () => {
    const [data, setData] = useState<CatFact | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('https://catfact.ninja/fact');
            const resJson = await res.json();
            setData(resJson);
        } catch (ignored) {}
    }, []);

    return { data, fetchData };
};

export default useSampleAPI;