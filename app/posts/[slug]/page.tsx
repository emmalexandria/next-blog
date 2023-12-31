import Image from "next/image"

import { H2, H3, H4, P, BlockQuote, Ul, Ol, Img, Code, Pre, Li, A } from '@/app/components'
import { allPosts } from "@/.contentlayer/generated"
import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"
import DarkModeWarning from "../../components/DarkModeWarning"
import { redirect } from "next/navigation"



export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    return {
        title: post.title, 
        description: post.description,
        creator: 'Emma Alexandria',
        publisher: 'Emma Alexandria',
        metadataBase: new URL('https://blog.emmalexandria.dev'),
        keywords: post.tags,
        openGraph: {
            images: [post.image]
        },  
        
       
    }
}




export default function BlogPage({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

    const MDXContent = useMDXComponent(post.body.code)
    return (
        <article className='text-dark-900 dark:text-light-800 px-4 pb-8 text-l w-full md:w-1/2 md:mx-auto lg:w-2/5 '>
            <h1 className='font-display text-4xl mb-4'>{post.title}</h1>
            {post.image ?
                <Image className="rounded" src={post.image} alt={post.alt as string} width={post.width} height={post.height} priority={true} />
                : undefined
            }
            <p className="font-body mt-2 font-light"> {format(parseISO(post.date), 'LLLL d, yyyy')}</p>
            <hr className="border-light-600 my-4" />
            <MDXContent components={{
                h2: H2,
                h3: H3,
                h4: H4,
                p: P,
                a: A,
                blockquote: BlockQuote,
                ul: Ul,
                ol: Ol,
                li: Li,
                pre: Pre,
                code: Code,
                Image: Img,
            }} />
            {/* <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
            {/* <MDXRemote components={{
                h2: H2,
                h3: H3,
                h4: H4,
                p: P,
                blockquote: BlockQuote,
                ul: Ul,
                ol: Ol,
                li: Li,
                pre: Pre,
                code: Code,
                Image: Img,
            }} source={post.content}/> */}
            <DarkModeWarning/>
        </article>

    )
} 