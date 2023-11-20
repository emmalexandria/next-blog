'use client'

import {Icon} from "@iconify/react"

export default function BlogLink() {
    return (
        <span className="flex flex-row items-center space-x-2 bg-accent-900 text-accentOnContainer w-fit px-2 py-1 rounded-md">
            <p>Read this post</p>
            <Icon icon="mdi:arrow-right"/>    
        </span>
    )
}