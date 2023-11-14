import Link from "next/link"
import Image from "next/image"
import { getPosts } from "./blog"
import BlogCard from "./BlogCard"


export default async function BlogList() {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug} className="text-dark-100">
          <BlogCard post={post} priority={true}/>
        </li>
    ))}

    </ul>
  )
}


