import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem(props: {href: string, children: React.ReactNode}) {
    const pathname = usePathname()

    return (
        <li className={`text-xl font-body text-dark-100  ${pathname === props.href ? 'text-accent-500': 'hover:text-accent-500'}`} >
            <Link href={props.href} className="w-full h-full block p-4">
                {props.children}
            </Link>
        </li>
    )
}