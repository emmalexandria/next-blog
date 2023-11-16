'use client'
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactCard(props: {href: string, icon?:string, children: React.ReactNode}) {
    return (
        <div className="p-2 space-x-2 flex flex-row items-center">
            {props.icon && <Icon icon={props.icon} height={36}/>}
            <a className="text-dark-100 font-body text-xl" href={props.href} target="_blank">{props.children}</a>
        </div>
    )
}