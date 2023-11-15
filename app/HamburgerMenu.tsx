'use client'

import { Icon } from "@iconify/react"
import { MouseEventHandler, useState } from "react";

export default function HamburgerMenu(props: {isOpen: boolean, onChange: Function }) {
    const onClick = (e:any) => {
        e.preventDefault()
        props.onChange();
    }

    return (
        <div onClick={onClick}>
            {!props.isOpen ? (
                <Icon icon="mdi:menu"  width={36}/>
            ) : (
                <Icon icon="mdi:close" width={36}/>
            )}
        </div>
    )
}