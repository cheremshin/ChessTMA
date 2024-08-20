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

    useEffect(() => {
        if (tgID) {
            fetchData((object: UserDTO) => object.user).then();
        }
    }, [tgID, fetchData]);

    useEffect(() => {
        if (!isError && !isLoading) {
            handleRetry();
        }
    }, [isLoading, isError]);

    const handleRetry = () => {
        router.back();
    }

    return (
        <RegisterContextProvider contextData={{
            isError,
            isLoading,
            handleRetry,
        }}>
            <RegisterPage />
        </RegisterContextProvider>
    );
}

export default Page;
