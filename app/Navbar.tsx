'use client'

import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    const menuClicked = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between items-center p-4 md:p-8">
                <span className="flex flex-col h-fit grow">
                    <Link href="/" className="w-fit">
                        <p className="text-xl font-light font-display">Emma Alexandria's</p>
                        <h1 className="text-5xl font-display font-black w-fit text-center">Blog</h1>
                    </Link>
                </span>
                <span className="flex flex-row items-center md:hidden">
                    <HamburgerMenu isOpen={menuOpen} onChange={menuClicked} />
                    <DarkModeSwitcher/>
                </span>

                <nav className="hidden md:block">
                    <ul className="flex flex-row items-center">
                        <NavItem href="/contact">Contact</NavItem>
                        <li>
                        <DarkModeSwitcher/>
                        </li>

                    </ul>
                </nav>
            </div>
            {menuOpen ? (
                <nav className="absolute w-full h-fit bg-light-900 dark:bg-dark-900 z-10 border-t-2 border-b-2 border-light-700">
                    <ul className="">
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </ul>
                </nav>
            ) : undefined}

        </div>

    )
}