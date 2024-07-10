"use client";


import { FC } from "react";
import Image from "next/image";

import Icon from "../../../public/coins_image.png";


type IProps = {
    coins: number;
}

const CoinsBlock : FC<IProps> = (props) => {
  const { coins } = props;

  const COINS_AMOUNT = coins;

    return (
        <div className=" w-[110px] h-[30px] flex flex-row items-center">
            {/* Coins amount */}
            <div className="text-black flex flex-col text-center">
                <span className="font-bold text-xl leading-6">
                    {(Math.round(COINS_AMOUNT * 100) / 100).toFixed(2)}
                </span>
            </div>

            {/* Coins icon */}
            <Image
                src={Icon}
                width={30}
                height={30}
                quality={100}
                alt=""
                className="ml-[5px]"
            />
        </div>
    );
};

export default CoinsBlock;