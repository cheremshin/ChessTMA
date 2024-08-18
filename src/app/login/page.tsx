"use client";

import { useFetch } from "@/shared/hooks/useFetch";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";
import { User, UserDTO } from "@/shared/types/api/users/UserDTO";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserData } from "../context/userContext";
import LoginPage from "@/pages/login/page";

const Page = () => {
    const router = useRouter();
    const { setId, setCoins, setRating } = useUserData();

    const tgData = useTelegramInitData();
    const tgID = tgData?.user?.id;

    const { data, isLoading, isError, fetchData } = useFetch<UserDTO, User>(`/users/${tgID}`);

    useEffect(() => {
        if (tgID) {
            fetchData((object: UserDTO) => object.user).then();
        }
    }, [tgID, fetchData]);

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
        <LoginPage />
    );
};

export default Page;
