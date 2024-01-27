import BlogCard from "@/components/BlogCards/BlogCards";
import { getPosts } from "@/lib/data";

export const metadata = {
    title: "COSMOZ Blog || Blogs",
    description: "Created by Sandipan",
  };

const Blog = async() => {
    // using server action
    const allPosts = await getPosts()

    // using Next Api 
    // const resp = await fetch("http://127.0.0.1:3000/api/blog")
    // const allPosts = await resp.json()

    return ( <div className="blog-flex-container">
        {allPosts.map(post => <BlogCard key= {post.id} post={post}/>)}

    </div> );
}
 
export default Blog;