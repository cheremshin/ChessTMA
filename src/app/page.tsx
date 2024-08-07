"use client";

import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { webAppContext } from "./context";

import MainPage from "@/pages/mainPage/page";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";
import { useFetch } from "@/shared/hooks/useFetch";
import { User, UserDTO } from "@/shared/types/api/users/UserDTO";
import { useRouter } from "next/navigation";
import { useUserData } from "./context/userContext";


export default observer(function Home() {
	const router = useRouter();
	const { setId, setCoins, setRating } = useUserData();
  	const app = useContext(webAppContext);

	const tgData = useTelegramInitData();
  	const tgID = tgData?.user?.id || 127;

    const { data, isLoading, isError, fetchData } = useFetch<UserDTO, User>(`/users/${tgID}`);

  	useEffect(() => {
        fetchData((object: UserDTO) => object.user).then();
  	}, []);

    useEffect(() => {
    	if (!isLoading && isError) {
        	router.push('/register');
    	} else if (data) {
      	    const { id, coins, rating } = data;

            setId(id);
			setCoins(coins);
			setRating(rating);
    	}
    }, [isLoading]);

  	return (
    	<>
        	{app.version? (
            	<MainPage />
        	) : (
            	<div className="h-full w-full p-30 bg-gray-100 rounded-2xl">
            	</div>
        	)}
    	</>
  );
});
