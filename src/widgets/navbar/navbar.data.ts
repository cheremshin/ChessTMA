import { IMenuLink } from "./button/button-interface";

import FriendsIcon from "@/../public/friends.svg";
import RatingIcon from "@/../public/rating.svg";
import HomeIcon from "@/../public/home.svg";
import HistoryIcon from "@/../public/history.svg";
import ProfileIcon from "@/../public/profile.svg";


export const menu: IMenuLink[] = [
    {
        name: "Друзья",
        url: "/#",
        icon: FriendsIcon,
    },
    {
        name: "Рейтинг",
        url: "/#",
        icon: RatingIcon,
    },
    {
        name: "Главная",
        url: "/",
        icon: HomeIcon,
    },
    {
        name: "История",
        url: "/#",
        icon: HistoryIcon,
    },
    {
        name: "Профиль",
        url: "/#",
        icon: ProfileIcon,
    }
];
