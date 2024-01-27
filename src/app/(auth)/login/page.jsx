"use client"

import { handleLogin, handleSignInViaGitHub } from "@/lib/actions";
import { useFormState } from "react-dom";


function signin() {
  const [state, formAction] = useFormState(handleLogin, undefined);
  return <> 
  <h1>Login</h1>
  <center>
    <form action={handleSignInViaGitHub}>
    <button >Login with GitHub</button>
  </form >
  <h3>OR</h3>
  </center>
  {state?.error && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error!</strong> {state?.error}
      </div>}

      {state?.success && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> {state?.success}
        <p>Redirecting you to the Login Page.</p>
      </div>}
  <form action={formAction}>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password"/>
  </div>

  
  <button type="submit" className="btn btn-primary">LogIn</button>
  <button type="reset" className="btn btn-warning">Reset</button>
</form>

  </>
  
}

export default signin;