import Header from "@/widgets/mainPage/Header";
import Navbar from "@/widgets/navbar/Navbar";


const MainPage = () => {
    return (
        <div className="">
            <Header className="
                w-full
                flex
                justify-between
                items-center
                px-[25px]
                pt-[30px]"
            />

            <Navbar className="
                w-full
                h-[80px]
                fixed
                flex
                items-center
                justify-evenly
                bottom-0
                z-50
                bg-white
                border-t-[2px]
                border-[#C1C1C1]"
            />
        </div>
    );
};

export default MainPage;