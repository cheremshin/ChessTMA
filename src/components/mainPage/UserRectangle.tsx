"use client";

import Image from "next/image";

import Icon from "../../../public/avatar_sample.png";


const UserRectangle = () => {
  const RATING_VALUE_MOCK : number = 2051;
  const IMAGE_MOCK = Icon;

  return (
    <div className=" flex items-center bg-[#0F0F0F] w-[150px] h-[50px] rounded-full">
      {/* Avatar placeholder */}
      <div className=" flex items-center w-[45px] h-[45px] m-[4px] bg-white rounded-full">
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
