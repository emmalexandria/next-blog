import { readdirSync, readFileSync } from "fs"
import matter from "gray-matter"

export async function GET(request: Request) {
    const files = readdirSync("_posts")

    const posts = files.map(filename => {
        const content = readFileSync(`_posts/${filename}`, 'utf-8')
        const frontMatter = matter(content);

        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        }
    })

    return Response.json(posts)
}