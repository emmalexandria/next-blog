import { readFileSync, readdirSync } from "fs"
import matter from "gray-matter"
import { useRouter } from "next/router"
import path from "path"


export interface IPost {
    title: string,
    description: string,
    date: string,
    image: string,
    alt: string,
    dimensions: [number, number]
}

export function getPosts(): {meta: IPost, slug: string}[] {
    const files = readdirSync(path.join("posts"))
  
    // 3) For each blog found
    const posts = files.map(filename => {
  
      // 4) Read the content of that blog
      const fileContent = readFileSync(path.join("posts", filename), 'utf-8')
  
      // 5) Extract the metadata from the blog's content
      const { data: frontMatter } = matter(fileContent)

   
  
      // 6) Return the metadata and page slug
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