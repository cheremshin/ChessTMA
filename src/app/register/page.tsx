"use client";

import { useEffect, useState } from "react";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";
import { useFetch } from "@/shared/hooks/useFetch";
import { UserDTO, User } from "@/shared/types/api/users/UserDTO";
import { useRouter } from "next/navigation";

import RegisterPage from "@/pages/register/page";
import { RegisterContextProvider } from "@/widgets/register/RegisterContext";


const Page = () => {
    const router = useRouter();
    const tgData = useTelegramInitData();

    const tgID = tgData?.user?.id;

    const { isLoading, isError, fetchData } = useFetch<UserDTO, User>(`/users/${tgID}`, 'POST');
    const [ shouldRetry, setShouldRetry ] = useState(true);

    useEffect(() => {
        if (shouldRetry && tgID) {
            fetchData((object: UserDTO) => object.user).then();
            setShouldRetry(false);

            if (!isLoading && !isError) {
                router.back();
            }
        }
    }, [shouldRetry, tgID, fetchData]);

    const handleRetry = () => {
        setShouldRetry(true);
        router.back();
    }

    return (
        <RegisterContextProvider contextData={{
            isError,
            handleRetry,
        }}>
            <RegisterPage />
        </RegisterContextProvider>
    );
}

export default Page;
