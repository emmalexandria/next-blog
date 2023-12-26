'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";

export default function DarkModeSwitcher() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            aria-label="Dark mode switcher"
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='px-4 py-2 hover:text-accent-500 hover:dark:text-accent-900 text-xl'>
            <Icon icon={currentTheme == 'dark' ? "material-symbols:dark-mode": "material-symbols:light-mode"}/>
        </button>
    )
}