'use client'

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavItem from "./NavItem";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuClicked = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center p-4 text-dark-100">
                <span className="flex flex-col">
                    <p className="text-xl font-light font-display">Emma Alexandria's</p>
                    <h1 className="text-5xl font-display font-black w-fit text-center">Blog</h1>
                </span>
                <HamburgerMenu onChange={menuClicked} />
            </div>
            {menuOpen ? (
                <nav className="fixed w-full h-fit z-10 text-dark-100">
                    <ul>
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/blog">Posts</NavItem>
                        <NavItem href="/photos">Photos</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </ul>
                </nav>
            ): <></>}



        </div>

    )
}