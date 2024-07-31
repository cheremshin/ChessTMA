"use client";

import { useContext } from "react";
import { webAppContext } from "./context";

import MainPage from "@/pages/mainPage/page";

export default function Home() {
  const app = useContext(webAppContext);
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
}
