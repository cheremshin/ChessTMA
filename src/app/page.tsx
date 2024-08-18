"use client";

import { useContext, useEffect } from "react";
import { webAppContext } from "./context";

import { useRouter } from "next/navigation";
import { useUserData } from "./context/userContext";

import MainPage from "@/pages/mainPage/page";
import LoadingSpinner from "@/widgets/loadingSpinner/LoadingSpinner";


const Home = () => {
	const router = useRouter();
	const app = useContext(webAppContext);
	const { isAuthorized } = useUserData();

	useEffect(() => {
		if (!isAuthorized) {
			router.push("/login");
		}
	}, []);

  	return app.version && isAuthorized ? (
		<MainPage />
	) : (
		<LoadingSpinner />
	);
};

export default Home;
