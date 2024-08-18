import { RegisterContext } from "@/widgets/register/RegisterContext";
import { useContext } from "react";


const RegisterPage = () => {
    const { isError, handleRetry } = useContext(RegisterContext);

    return !isError ? (
        <div className="w-full h-full flex items-center justify-center">
            Создание пользователя...
        </div>
    ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-9">
            <p>Ошибка создания пользователя</p>
            <button onClick={handleRetry} className="bg-black text-white rounded-lg p-2">
                Попробовать снова
            </button>
        </div>
    );
};

export default RegisterPage;
