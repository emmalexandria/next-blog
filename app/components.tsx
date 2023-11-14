import { ImgHTMLAttributes } from "react"
import Image from "next/image"

export function H1(props: { children?: React.ReactNode }) {
    return (
        <h1 className="font-display text-4xl">{props.children}</h1>
    )
}

export function H2(props: { children?: React.ReactNode }) {
    return (
        <h2 className="font-display text-3xl">{props.children}</h2>
    )
}

export function H3(props: { children?: React.ReactNode }) {
    return (
        <h3 className="font-display text-2xl">{props.children}</h3>
    )
}

export function H4(props: { children?: React.ReactNode }) {
    return (
        <h4 className="font-display text-xl">{props.children}</h4>
    )
}

export function P(props: { children?: React.ReactNode }) {
    return (
        <p className="font-body">{props.children}</p>
    )
}

export function BlockQuote(props: { children?: React.ReactNode }) {
    return (
        <blockquote className="font-body bg-light-800 border-l-2 border-light-700">{props.children}</blockquote>
    )
}

export function Ul(props: {children?: React.ReactNode}) {
    return (
        <ul className="list-disc list-inside">{props.children}</ul>
    )
}

export function Ol(props: {children?: React.ReactNode}) {
    return (
        <ol className="list-decimal list-inside">{props.children}</ol>
    )
}

export function Img(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <Image src={props.src != undefined ? props.src: ""}/>
    )
}

