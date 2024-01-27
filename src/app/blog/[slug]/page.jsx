import AvatarCard from "@/components/AvatarCard/AvatarCard";
import { getPost } from "@/lib/data";
import { Suspense } from "react";
import Image from "next/image"
export const  generateMetadata = async ({params}) => {
  const post = await getPost(params.slug)
  return {
    title: 'COSMOZ Blog || ' + post.title ,
    description: 'Created by Sandipan'
  }
}

const SingleBlog = async ({params}) => {

  // using server action 
  const post = await getPost(params.slug)

    return ( <>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 single-blog-content">
      <div className="col-10 col-sm-8 col-lg-6">
       {post.image ? <img src={post.image } className="card-img-top" width="100px" alt="..."/> : <Image src="/no-post-pic.png" width={500} height={200}></Image>}
        

      </div>
      <div className="col-lg-6 ">
        <Suspense fallback={<div>LOAAAAAAADDDIINNGGG</div>}>
        <AvatarCard createdAt={post.createdAt} authorEmail={post.authorEmail}/>
        </Suspense>
        <h1 className="display-5 fw-bold lh-1 mb-3"> {post.title} </h1>

        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <p>{post.desc} </p>
        </div>
      </div>
    </div>
    </> );
}

export default SingleBlog;