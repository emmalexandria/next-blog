import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPost } from '../../blog'

import { MDXRemote } from 'next-mdx-remote/rsc'

import {H1, H2, H3, H4, P, BlockQuote, Ul, Ol, Img} from '@/app/components'




export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

export async function generateMetadata({params}: {params: {post: string}}) {
    const blog = getPost(params.post);

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.excerpt
    }
}



export default function BlogPage({ params }: { params: { post: string }}) {
    const post =  getPost(params.post)
    

    return (
        <article className='text-dark-100 px-4 text-l'>
            <MDXRemote components={{
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                p: P,
                blockquote: BlockQuote,
                ul: Ul,
                ol: Ol,
                img: Img,
            }} source={post.content}/>
        </article>
    )
}   