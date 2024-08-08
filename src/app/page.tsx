"use client";

import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { webAppContext } from "./context";

import MainPage from "@/pages/mainPage/page";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";
import { useFetch } from "@/shared/hooks/useFetch";
import { User, UserDTO } from "@/shared/types/api/users/UserDTO";
import { redirect, useRouter } from "next/navigation";
import { useUserData } from "./context/userContext";


export default observer(function Home() {
	const router = useRouter();
	const { isAuthorized } = useUserData();
  	const app = useContext(webAppContext);

	useEffect(() => {
		if (!isAuthorized) {
			router.push("/login");
		}
	}, []);

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
