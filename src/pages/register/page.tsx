import { RegisterContext } from "@/widgets/register/RegisterContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";


const RegisterPage = () => {
    const router = useRouter();

    const { isError, isLoading, handleRetry } = useContext(RegisterContext);

    const navigateHomePage = () => {
        router.push("/");
    }


    if (!isError && isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                Создание пользователя...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-9">
                <p>Ошибка создания пользователя</p>
                <button onClick={handleRetry} className="bg-black text-white rounded-lg p-2">
                    Попробовать снова
                </button>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-9">
            <p>Профиль создан!</p>
            <button onClick={navigateHomePage} className="bg-black text-white rounded-lg p-2">
                Перейти на главую
            </button>
        </div>
    )
};

export default RegisterPage;
