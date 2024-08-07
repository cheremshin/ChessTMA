"use client";

import { useEffect, useState } from "react";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";
import { useFetch } from "@/shared/hooks/useFetch";
import { UserDTO, User } from "@/shared/types/api/users/UserDTO";
import { useRouter } from "next/router";


const Page = () => {
    const { push } = useRouter();
    const tgData = useTelegramInitData();
    const tgID = tgData?.user?.id || 127;

    const { isLoading, isError, fetchData } = useFetch<UserDTO, User>(`/users/${tgID}`, 'POST');

    const [ shouldRetry, setShouldRetry ] = useState(true);

    useEffect(() => {
        if (shouldRetry) {
            fetchData((object: UserDTO) => object.user).then(() => {
                setShouldRetry(false);

                if (!isLoading && !isError) {
                    console.log("Successfuly registered");
                }
            });
            push("/");
        }
    }, [shouldRetry]);

    const handleRetry = () => {
        setShouldRetry(true);
        push("/");
    }

    return !isError ? (
        <div className="w-full h-full flex items-center justify-center">
            Создание пользователя...
        </div>
    ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-9">
            <p>Ошибка создания пользователя</p>
            <button onClick={handleRetry} className="bg-black text-white rounded-lg p-2">
                Попробовать снова
            </button>
        </div>
    )
}

export default Page;
