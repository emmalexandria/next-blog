import Link from "next/link";

export default function StyledLink({className, href, children}: {className?: string, href: string, children: string}) {
    return (
        <Link href={href} className={`text-accent-300 visited:text-accent-200 dark:text-accent-900 dark:visited:text-accent-800 underline ${className}`}>{children}</Link>
    )
}