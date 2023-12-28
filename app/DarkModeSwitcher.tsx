'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitcher() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [mobileText, setMobileText] = useState("Light")

    useEffect(() => {
        setMobileText(currentTheme=='dark' ? 'Light' : 'Dark')
    }, [theme])

    return (
        <div>
            <button
            aria-label="Dark mode switcher"
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='hidden md:block hover:text-accent-500 hover:dark:text-accent-900 text-xl'>
            <Icon icon={currentTheme == 'dark' ? "material-symbols:dark-mode": "material-symbols:light-mode"}/>
        </button>
        <button
            aria-label="Dark mode switcher"
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='block text-xl md:hidden hover:text-accent-500 hover:dark:text-accent-900 text-xl'>
            {mobileText} mode
        </button>
        </div>
        
    )
}