import { addPost } from "@/lib/actions";
import { auth } from "@/lib/auth";

const CreatePost = async() => {
    const session = await auth()
    return (<>
     <form className="edit-form-card" action={addPost}>
    <h1>Create Your Post</h1>
  <div className="form-group mb-3">
    <label for="input1">Post Title</label>
    <input type="text" className="form-control" id="input1" name="title"  required/>
  </div>
  <div className="form-group mb-3">
    <label for="input2">Post Body</label>
    <input type="text" className="form-control" id="input2" name="desc"  required/>
  </div>
  {/* <div className="form-group mb-3">
    <label for="input3">Post Slug</label>
    <input type="text" className="form-control" id="input3" name="slug"  required/>
  </div> */}
  <div className="form-group mb-3">
    <label for="input4">Post Image Public URL</label>
    <input type="text" className="form-control" id="input4" name="image"  />
  </div>

  <input type="hidden" className="form-control" id="input5" name="authorEmail" defaultValue={session.user?.email} />
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </>  );
}
 
export default CreatePost;