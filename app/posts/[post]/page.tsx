import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from "next/image"
import { getPost } from '../../blog'

import { MDXRemote } from 'next-mdx-remote/rsc'

import {H2, H3, H4, P, BlockQuote, Ul, Ol, Img, Code, Pre, Li} from '@/app/components'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'




export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('_posts'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

export async function generateMetadata({params}: {params: {post: string}}) {
    const blogPost = getPost(params.post);

    return {
        title: blogPost.frontMatter.title,
        description: blogPost.frontMatter.description,
        metadataBase: new URL("https://blog.emmalexandria.dev"),
        openGraph: [blogPost.frontMatter.image],
    }
}



export default function BlogPage({ params }: { params: { post: string }}) {
    const post =  getPost(params.post)
    

    return (
        <article className='text-dark-100 px-4 text-l w-full'>
            <h1 className='font-display text-4xl mb-4'>{post.frontMatter.title}</h1>
            {post.frontMatter.image ? 
            <Image src={post.frontMatter.image} alt={post.frontMatter.alt} width={post.frontMatter.dimensions[0]} height={post.frontMatter.dimensions[1]} priority={true}/>
            : undefined
            }
            <p className="font-body mt-2">{post.frontMatter.date.toDateString()}</p>
            <hr className="border-light-600 my-4"/>
            <MDXRemote components={{
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
            }} source={post.content}/>
        </article>
    )
}   