import { Suspense } from "react";
import BlogList from "./BlogList";
import BlogListSkeleton from "./BlogListSkeleton";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Emma Alexandria's Blog",
  description: "I'm a software developer from Cape Town. I work in web development.",
  creator: "Emma Alexandria",
  keywords: ["Blog", "Full stack developer", "South Africa"]
}

export default function Home() {
  return (
    <div className="px-4 text-dark-100 md:w-1/2 md:mx-auto lg:w-1/3">

      <h1 className="text-4xl md:text-5xl font-display my-2 font-bold">Posts</h1>
      <p className="font-body text-xs md:text-sm mb-4">If you want to learn more about me, go to my <a className="text-accent-300 visited:text-accent-200 underline" href="https://emmalexandria.dev">portfolio</a>.</p>
      <Suspense fallback={(<BlogListSkeleton num={2} />)}>
        <BlogList />
      </Suspense>
    </div>
  )
}
