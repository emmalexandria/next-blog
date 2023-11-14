'use client'

import { Icon } from "@iconify/react"
import { MouseEventHandler, useState } from "react";

export default function HamburgerMenu(props: { onChange: Function }) {
    const [isOpen, setOpen] = useState(false);

    const onClick = (e:any) => {
        setOpen(!isOpen)
        props.onChange();
    }

    return (
        <div onClick={onClick}>
            {!isOpen ? (
                <Icon icon="mdi:menu"  width={36}/>
            ) : (
                <Icon icon="mdi:close" width={36}/>
            )}
        </div>
    )
}