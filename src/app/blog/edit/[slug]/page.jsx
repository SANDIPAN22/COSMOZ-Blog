import { updatePost, deletePost } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { getPost } from "@/lib/data";
import { redirect } from "next/navigation";

const EditPost = async({params}) => {
    const session = await auth()
    
    const post = await getPost(params.slug)
    if (session.user?.email !== post.authorEmail){
        redirect("/")
    }
    return ( <>
    
    <form className="edit-form-card" action={updatePost}>
    <h1>Edit Your Post</h1>
  <div className="form-group mb-3">
    <label for="input1">Post Title</label>
    <input type="text" className="form-control" id="input1" name="title" defaultValue={post.title} required/>
  </div>
  <div className="form-group mb-3">
    <label for="input2">Post Body</label>
    <input type="text" className="form-control" id="input2" name="desc" defaultValue={post.desc} required/>
  </div>
  {/* <div className="form-group mb-3">
    <label for="input3">Post Slug</label>
    <input type="text" className="form-control" id="input3" name="slug" defaultValue={post.slug} required/>
  </div> */}
  <div className="form-group mb-3">
    <label for="input4">Post Image Public URL</label>
    <input type="text" className="form-control" id="input4" name="image" defaultValue={post.image} />
  </div>
  

    <input type="hidden" className="form-control" id="input5" name="authorEmail" defaultValue={post.authorEmail} />
    <input type="hidden" className="form-control" id="input6" name="oldSlug" defaultValue={post.slug} />
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  <form action={deletePost}>
  <input type="hidden" className="form-control" id="input6" name="oldSlug" defaultValue={post.slug} />
    <center><button className="btn btn-danger" type="submit">Delete the Post</button></center>
  </form>
    
    </> );
}
 
export default EditPost;