import { Suspense } from "react";
import BlogList from "./BlogList";
import BlogListSkeleton from "./BlogListSkeleton";
import type { Metadata } from "next";

 
export const metadata: Metadata = {
  title: "Emma Alexandria's Blog",
  description: "I'm a software developer from Cape Town. I work in web development."
}

export default function Home() {
  return (
    <div className="px-4 text-dark-100 ">
      <h1 className="text-4xl font-display my-4 font-bold">Recent posts</h1>
      <Suspense fallback={(<BlogListSkeleton num={2}/>)}>
        <BlogList/>
      </Suspense>
    </div>
  )
}
