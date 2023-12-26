'use client'

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import StyledLink from "./StyledLink";

export default function DarkModeWarning() {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
    
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <>
            {currentTheme == 'dark' && isClient ?
                <div className="bg-dark-800 px-4 py-2 rounded mt-8 ">
                    <p className="italic font-light">You read this article in dark mode. That's okay. But you should know that
                        dark mode may harm your ability to read, parse, and interpret textual information.
                    </p>
                    <StyledLink href="/posts/dark-mode">Read more.</StyledLink>
                </div>
                :
                undefined
            }
        </>

    )

}