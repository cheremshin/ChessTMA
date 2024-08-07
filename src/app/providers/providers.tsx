"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WebAppProvider } from "../context";
import { UserContextProvider } from "../context/userContext";

interface IPropsProviders {
    children: React.ReactNode,
}

const Providers = ({children}: IPropsProviders) => {
    return (
            <WebAppProvider>
                <UserContextProvider>
                    {children}
                </UserContextProvider>
            </WebAppProvider>
    )
}

export default Providers;
