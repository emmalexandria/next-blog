import Link from "next/link";
import Image from "next/image";
import { IPost } from "./blog";

export default function BlogCard(props: { post: { meta: IPost, slug: string }, priority :boolean}) {
    return (
        <div className="font-body text-black-100 border border-2 p-4 border-light-700 rounded">
            <Link href={`posts/${props.post.slug}`}>
                {props.post.meta.image ? (
                    <Image
                        src={props.post.meta.image}
                        alt={props.post.meta.alt}
                        width={props.post.meta.dimensions[0]}
                        height={props.post.meta.dimensions[1]}
                        priority={props.priority} 
                        />
                
                )
                    : null
                }
                <h1 className="font-display text-3xl my-2">
                    {props.post.meta.title}
                </h1>
                <p className="mb-2">{props.post.meta.description}</p>
                <p>{props.post.meta.date.toDateString()}</p>
            </Link>
        </div>
    )


}