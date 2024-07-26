import Link from "next/link";


const ChooseTheme = () => {
    return (
        <Link href={"/themes"} className="
            w-full
            py-2
            flex
            justify-center
            items-center
            bg-black
            rounded-l-[20px]
            text-white
        ">
            Выбрать тему
        </Link>
    )
}

export default ChooseTheme;
