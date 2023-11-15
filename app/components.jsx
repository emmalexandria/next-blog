import { ImgHTMLAttributes } from "react"
import Image from "next/image"

export function H2(props) {
    return (
        <h2 id={props.children} className="font-display text-3xl mb-1.5 mt-2.5">{props.children}</h2>
    )
}

export function H3(props) {
    return (
        <h3 id={props.children} className="font-display text-2xl">{props.children}</h3>
    )
}

export function H4(props) {
    return (
        <h4 id={props.children} className="font-display text-xl">{props.children}</h4>
    )
}

export function P(props) {
    return (
        <p className="font-body mb-2">{props.children}</p>
    )
}

export function BlockQuote(props) {
    return (
        <blockquote className="mb-2 px-2 py-4 font-body bg-light-800 border-l-2 border-light-700">{props.children}</blockquote>
    )
}

export function Ul(props) {
    return (
        <ul className="list-disc list-inside">{props.children}</ul>
    )
}

export function Ol(props) {
    return (
        <ol className="list-decimal list-inside">{props.children}</ol>
    )
}

export function Li(props) {
    return (
        <li className="mb-2">{props.children}</li>
    )
}


export function Img(props) {
    return (
        <div className="max-width-full mb-2">
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height} priority={props.priority ?? false}/>
        </div>
    )
}

export function Code(props) {
    return (
        <code>
            {props.children}
        </code>
    )
}


export function Pre(props) {
    return (
        <pre className="overflow-scroll mb-2">
            {props.children}
        </pre>
    )
}


