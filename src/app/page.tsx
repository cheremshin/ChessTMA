"use client";

import { useContext } from "react";
import { webAppContext } from "./context";

import UserRectangle from "@/components/mainPage/UserRectangle";

export default function Home() {
  const app = useContext(webAppContext);
  return (
    <>
      {app.version? (
        <header className="w-full">
          <UserRectangle />
        </header>
      ) : (
        "loading"
      )}
    </>
  );
}
