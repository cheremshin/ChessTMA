"use client";

import Image from "next/image";
import { FC } from "react";

import { TelegramWebApps } from "telegram-webapps-types-new";

import Icon from "../../../public/avatar_sample.png";


interface UserRectangleProps {
    user?: TelegramWebApps.WebAppUser;
    rating?: number;
}

const UserRectangle : FC<UserRectangleProps> = (props) => {
    const { user, rating } = props;

    const RATING_VALUE_MOCK : number = 2500;
    const IMAGE_MOCK = user?.photo_url ? user?.photo_url : Icon;

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
                <span className="font-bold text-xl leading-6">{RATING_VALUE_MOCK}</span>
            </div>
        </div>
    );
};

export default UserRectangle;
