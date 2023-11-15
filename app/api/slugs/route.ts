import { readdirSync } from "fs";
import path from "path";


export async function GET(request: Request) {
    const files = readdirSync(path.join("_posts"));

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return Response.json(paths);
}