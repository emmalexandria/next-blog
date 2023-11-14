import { Suspense } from "react";
import BlogList from "./BlogList";
import BlogListSkeleton from "./BlogListSkeleton";

export default function Home() {
  return (
    <div className="px-4 text-dark-100">
      <h1 className="text-3xl font-display">Recent posts</h1>
      <Suspense fallback={(<BlogListSkeleton num={2}/>)}>
        <BlogList/>
      </Suspense>
    </div>
  )
}
