import BlogCard from "./BlogCard"

import { compareDesc} from 'date-fns'
import { allPosts } from 'contentlayer/generated'


export default async function BlogList() {
  let posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).filter((p) => {
    if(p.draft != undefined) {
      return !p.draft
    }
    return true
  })

  return (
    <ul className="space-y-2">
      {posts.map((post, idx) => (
        <li key={idx} className="">
          <BlogCard post={post} priority={true}/>
        </li>
    ))}

    </ul>
  )
}


