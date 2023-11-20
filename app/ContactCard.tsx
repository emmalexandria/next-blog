'use client'
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactCard(props: {href: string, icon?:string, children: React.ReactNode}) {
    return (
        <a href={props.href} target="_blank" className="py-1 md:py-2 block text-xl hover:text-accent-500 ">
<           div className="space-x-2 flex flex-row items-center">
                {props.icon && <Icon icon={props.icon}/>}
                <p className="font-body" >{props.children}</p>
            </div>
        </a>
        
    )
}