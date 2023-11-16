import Link from "next/link";

export default function NavItem(props: {href: string, children: React.ReactNode}) {
    return (
        <li className='text-xl font-body text-dark-100 hover:text-accent-500' >
            <Link href={props.href} className="w-full h-full block p-4">
                {props.children}
            </Link>
        </li>
    )
}