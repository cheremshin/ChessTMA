import { createContext, ReactNode, FC } from "react";


export type RegisterContextT = {
    isError: boolean,
    handleRetry: () => void;
};

export const RegisterContext = createContext<RegisterContextT>({
    isError: false,
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
            handleRetry: contextData.handleRetry,
        }}>
            { children }
        </RegisterContext.Provider>
    );
};
