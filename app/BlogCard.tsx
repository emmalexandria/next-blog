import Link from "next/link";
import Image from "next/image";
import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import BlogLink from "./BlogLink";

export default function BlogCard(props: { post: Post, priority: boolean }) {
    return (
        <div className="font-body text-black-100 px-4 py-2 bg-light-800 rounded">
                {props.post.image ? (
                    <div>
                        <Image
                            src={props.post.image}
                            alt={props.post.alt as string}
                            width={props.post.width}
                            height={props.post.height}
                            priority={props.priority}
                        />
                        <hr className="my-2 border-light-600 border-1" />
                    </div>
                )
                    : null
                }
                <h1 className="font-display text-3xl">
                    {props.post.title}
                </h1>
                <p className="font-light">{format(parseISO(props.post.date), 'LLLL d, yyyy')}</p>
                <p className="mb-1">{props.post.description}</p>
                <Link href={props.post.url}><BlogLink/></Link>
        </div>
    )


}