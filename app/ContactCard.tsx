'use client'
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactCard(props: {href: string, icon?:string, children: React.ReactNode}) {
    return (
        <div className="p-2 md:p-4 space-x-2 flex flex-row items-center text-dark-100 hover:text-accent-500">
            {props.icon && <Icon icon={props.icon} height={36}/>}
            <a className="font-body text-xl" href={props.href} target="_blank">{props.children}</a>
        </div>
    )
}