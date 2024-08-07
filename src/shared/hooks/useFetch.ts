import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../config/apiConfig";

type FetchState<T, V> = {
    data: V | null;
    isLoading: boolean;
    isError: boolean;
    fetchData: (callback: (data: T) => V) => Promise<void>;
}

export const useFetch = <T, V, K = undefined>(endpoint: string, method = 'GET', body?: K): FetchState<T, V> => {
    const url = `${API_BASE_URL}${endpoint}`

    const [data, setData] = useState<V | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async (callback: (data: T) => V) => {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                ...body && { body: JSON.stringify(body) },
            });

            if (response.status > 400)
                throw new Error('Network error');

            const data: T = await response.json() as T;
            const decoded: V = callback(data);

            console.log("fetched",data);
            console.log("decoded",decoded);
            setData(decoded);
        } catch (error) {
            console.log("Error occured when fetch:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, isError, fetchData };
}
