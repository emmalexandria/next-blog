import Link from "next/link";
import Image from "next/image";
import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import BlogLink from "./BlogLink";

export default function BlogCard(props: { post: Post, priority: boolean }) {
    return (
        <div className="font-body p-4 bg-light-800 dark:bg-dark-800 rounded-md">
                {props.post.image ? (
                    <div className="overflow-clip rounded">
                        <Image
                            className="w-full h-auto object-contain rounded"
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
                <p className="font-light mb-2">{format(parseISO(props.post.date), 'LLLL d, yyyy')}</p>
                <p className="mb-2">{props.post.description}</p>
                <Link className="block" href={props.post.url}><BlogLink/></Link>
        </div>
    )


}