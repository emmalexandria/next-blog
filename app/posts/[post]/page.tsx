import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPost } from '../../blog'

import { MDXRemote } from 'next-mdx-remote/rsc'

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
        <article>
            <MDXRemote source={post.content}/>
        </article>
    )
}   