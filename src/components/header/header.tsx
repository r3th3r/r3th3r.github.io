import Image from "next/image";
import BurgerMenu from "@/components/nav-bar/burger-menu";
import NavBar from "@/components/nav-bar";

const Header = () => {

    return (
        <header
            className="sticky flex justify-between w-full h-[101px] z-[11] bg-[#1f1f1f] pb-0 md:pt-[45px] lg:pt-[45px] px-8 md:px-[45px] lg:px-[45px] top-0 inset-x-0"
        >
            <div className="justify-center items-center flex flex-col w-14">
                <Image src="/images/logo.svg" width={48} height={48} alt="Logo"/>
            </div>
            <NavBar/>
            <BurgerMenu/>
        </header>
    );
}

export default Header;