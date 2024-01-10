import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
//
import styles from './NavItem.module.css';

type NavItemProps = {
    href: string;
    text: string;
}

const NavItem: React.FC<NavItemProps> = React.memo(({href, text}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const linkClassNames = `${styles.link} ${isActive ? styles.active : ''}`;

    return (
        <li>
            <Link href={href} className={linkClassNames}>
                {text}
            </Link>
        </li>
    );
});

export default NavItem;
