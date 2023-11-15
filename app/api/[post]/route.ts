import { readFileSync } from "fs"
import matter from "gray-matter"
import path from "path"


export async function GET(request: Request,  { params }: { params: { slug: string } }) {
    const slug = params.slug;
    const markdownFile = readFileSync(path.join('_posts',`${slug}.mdx`), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}
