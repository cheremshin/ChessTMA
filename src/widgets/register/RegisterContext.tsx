import { createContext, ReactNode, FC } from "react";


export type RegisterContextT = {
    isError: boolean,
    isLoading: boolean,
    handleRetry: () => void;
};

export const RegisterContext = createContext<RegisterContextT>({
    isError: false,
    isLoading: true,
    handleRetry: () => {},
});

export interface Props {
    contextData: RegisterContextT;
    children: ReactNode;
};


export const RegisterContextProvider: FC<Props> = (props) => {
    const { contextData, children } = props;

    return (
        <RegisterContext.Provider value={{
            isError: contextData.isError,
            isLoading: contextData.isLoading,
            handleRetry: contextData.handleRetry,
        }}>
            { children }
        </RegisterContext.Provider>
    );
};
