"use client";

import { useFetch } from "@/shared/hooks/useFetch";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";
import { User, UserDTO } from "@/shared/types/api/users/UserDTO";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserData } from "../context/userContext";


const Page = () => {
    const router = useRouter();
    const { setId, setCoins, setRating } = useUserData();

    const tgData = useTelegramInitData();
    const tgID = tgData?.user?.id;

    const { data, isLoading, isError, fetchData } = useFetch<UserDTO, User>(`/users/${tgID}`);

    useEffect(() => {
        fetchData((object: UserDTO) => object.user).then();
    }, []);

    useEffect(() => {
    	if (!isLoading && isError) {
        	router.push("/register");
    	} else if (data) {
      	    const { id, coins, rating } = data;

            setId(id);
			setCoins(coins);
			setRating(rating);

            router.back();
    	}
    }, [isLoading]);

    return (
        <div className="w-full h-full bg-white flex justify-center content-center">
            Выполняется вход
        </div>
    );
};

export default Page;
