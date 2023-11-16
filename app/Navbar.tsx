'use client'

import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

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
            <div className="flex flex-row justify-between items-center px-4 py-4 text-dark-100">
                <span className="flex flex-col h-fit grow">
                    <p className="text-xl font-light font-display">Emma Alexandria's</p>
                    <h1 className="text-5xl font-display font-black w-fit text-center">Blog</h1>
                </span>
                <HamburgerMenu isOpen={menuOpen} onChange={menuClicked} />
            </div>
            {menuOpen ? (
                <nav className="absolute w-full h-fit bg-light-900  z-10 text-dark-100 border-t-2 border-b-2 border-light-700">
                    <ul className="">
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </ul>
                </nav>
            ) : undefined}



        </div>

    )
}