import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavItemProps = {
    href: string;
    text: string;
    onClick: VoidFunction;
}

const BurgerItem: React.FC<NavItemProps> = React.memo(({href, text, onClick}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const linkClassNames = `w-full text-center rounded-md p-4 block transition-opacity ${isActive ? "bg-white text-[#1f1f1f]" : "hover:bg-gray-100 hover:bg-opacity-5"}`;

    return (
        <li className="w-full" onClick={onClick}>
            <Link href={href} className={linkClassNames} >
                {text}
            </Link>
        </li>
    );
});

export default BurgerItem;
