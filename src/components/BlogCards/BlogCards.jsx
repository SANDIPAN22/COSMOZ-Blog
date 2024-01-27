import Link from "next/link";
import Image from "next/image"
import { auth } from "@/lib/auth";

const BlogCard = async({post}) => {
    const session = await auth()
    
    return ( 
        <div className="card blog-card" style={{"width": "18rem"}}>
       {post.image ? <img src={post.image } className="card-img-top" width="100px" height="200px" alt="..."/> : <Image src="/no-post-pic.png" width={200} height={190}></Image>}
      
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    
    <p className="card-text">at {String(post.createdAt).slice(0,15)} </p>

    <Link href={`/blog/${post.slug}`}> <span  className="btn btn-primary" >Read More</span> </Link>
    {session?.user?.email === post.authorEmail && <Link href={`/blog/edit/${post.slug}`}> <span  className="btn btn-success" ><i className="bi bi-pencil-square"/> Edit Post</span> </Link> }
  </div>
</div>
     );
}
 
export default BlogCard;