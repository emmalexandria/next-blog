import { readdirSync, readFileSync } from "fs"
import matter from "gray-matter"

export async function GET(request: Request) {
    const files = readdirSync("blogs")

    const posts = files.forEach(filename => {
        const content = readFileSync(`blogs/${filename}`, 'utf-8')

        const frontMatter = matter(content);

        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        }
    })

    return Response.json(posts)
}