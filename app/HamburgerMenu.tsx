'use client'

import { Icon } from "@iconify/react"
import { MouseEventHandler, useState } from "react";

export default function HamburgerMenu(props: {isOpen: boolean, onChange: Function }) {
    const onClick = (e:any) => {
        e.preventDefault()
        props.onChange();
    }

    return (
        <div onClick={onClick} className="text-3xl">
            {!props.isOpen ? (
                <Icon icon="mdi:menu"/>
            ) : (
                <Icon icon="mdi:close"/>
            )}
        </div>
    )
}