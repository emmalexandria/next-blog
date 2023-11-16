import Link from "next/link";
import Image from "next/image";
import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";

export default function BlogCard(props: {post: Post, priority :boolean}) {
    return (
        <div className="font-body text-black-100 border border-2 p-4 border-light-700 rounded">
            <Link href={props.post.url}>
                {props.post.image ? (
                    <Image
                        src={props.post.image}
                        alt={props.post.alt as string}
                        width={props.post.width}
                        height={props.post.height}
                        priority={props.priority} 
                        />
                
                )
                    : null
                }
                <h1 className="font-display text-3xl my-2">
                    {props.post.title}
                </h1>
                <p className="mb-2">{props.post.description}</p>
                <p>{format(parseISO(props.post.date), 'LLLL d, yyyy')}</p>
            </Link>
        </div>
    )


}