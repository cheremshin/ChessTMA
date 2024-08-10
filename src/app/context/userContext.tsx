import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";


export interface IUserContext {
    isAuthorized: boolean;
    id: number;
    coins: number;
    rating: number;
    setId: (value: number) => void;
    setCoins: (value: number) => void;
    setRating: (value: number) => void;
}

export const UserContext = createContext<IUserContext>({
    isAuthorized: false,
    id: -1,
    coins: 0,
    rating: 0,
    setId: (number) => {},
    setCoins: (number) => {},
    setRating: (number) => {},
});

interface Props {
    children: ReactNode;
}

export const UserContextProvider: FC<Props> = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [id, setId] = useState<number>(0);
    const [coins, setCoins] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);

    const providerValue = useMemo(() => ({
        isAuthorized,
        id,
        coins,
        rating,
        setId,
        setCoins,
        setRating,
    }), [isAuthorized]);

    useEffect(() => {
        if (id != 0) {
            setIsAuthorized(true);
        }
    }, [id]);

    return (
        <UserContext.Provider value={ providerValue }>
            {children}
        </UserContext.Provider>
    );
};

export const useUserData = (): IUserContext => {
    return useContext(UserContext);
}
