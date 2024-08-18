"use client";

import Image from "next/image";

import Icon from "../../../public/avatar_sample.png";
import { useUserData } from "@/app/context/userContext";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";


const UserRectangle = () => {
    const { rating } = useUserData();
    const tgData = useTelegramInitData();

    const IMAGE_MOCK = tgData?.user?.photo_url ? tgData.user.photo_url : Icon ;

    return (
        <div className=" w-[150px] h-[50px] flex items-center bg-[#0F0F0F] rounded-full">
            {/* Avatar placeholder */}
            <div className=" w-[45px] h-[45px] flex items-center m-[4px] bg-white rounded-full">
                <Image
                src={IMAGE_MOCK}
                width={45}
                height={45}
                quality={100}
                alt=""
                />
            </div>

            {/* Rating */}
            <div className="text-white flex flex-col m-[5px] mt-[8px] text-center">
                <span className="font-normal text-sm leading-4">Рейтинг</span>
                <span className="font-bold text-xl leading-6">{Math.round(rating).toFixed(0)}</span>
            </div>
        </div>
    );
};

export default UserRectangle;
