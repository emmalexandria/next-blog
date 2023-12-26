import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem(props: {href: string, children: React.ReactNode}) {
    return (
        <li className={`text-xl font-body ${usePathname() === props.href ? 'text-accent-500 dark:text-accent-900': 'hover:text-accent-500 hover:dark:text-accent-900'}`} >
            <Link href={props.href} className="w-full h-full block p-4">
                {props.children}
            </Link>
        </li>
    )
}