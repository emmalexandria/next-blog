import { readFileSync, readdirSync } from "fs"
import matter from "gray-matter"
import { useRouter } from "next/router"
import path from "path"


export interface IPost {
    title: string,
    description: string,
    date: Date,
    image: string,
    alt: string,
    dimensions: [number, number]
}

export async function getPosts(): Promise<{meta: IPost, slug: string}[]> {
    const files = readdirSync(path.join("posts"))
    const posts = files.map(filename => {
  
      const fileContent = readFileSync(path.join("posts", filename), 'utf-8')
      const { data: frontMatter } = matter(fileContent)

      return {
        meta: frontMatter as IPost,
        slug: filename.replace('.mdx', '')
      }
      
    })

    return posts;
}

  

export function getPost(slug: string) {
    const markdownFile = readFileSync(path.join('posts',`${slug}.mdx`), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}