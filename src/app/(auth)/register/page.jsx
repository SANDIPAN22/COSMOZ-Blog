"use client"

import { handleRegister, handleSignInViaGitHub } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const Register = () => {
    const router = useRouter()
    const [state, formAction] = useFormState(handleRegister, undefined);
    useEffect(()=>{
        state?.success &&  setTimeout(()=>{router.push("/login")}, 5000)
    },[state?.success, router])

    return ( <>
    <h1>Register</h1>
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
    <label for="exampleInputUsername1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" name="username" required/>
    <div id="usernameHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputUsername1" className="form-label">Avatar URL</label>
    <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" name="avatar" required/>
    <div id="usernameHelp" className="form-text">Please Enter Any Public Url of Your Image</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPasswordRpt1" className="form-label"> ReEnter Password</label>
    <input type="password" className="form-control" id="exampleInputPasswordRpt1" name="rpt_password" required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Register</button>
  <button type="reset" className="btn btn-warning">Reset</button>
</form>
    </>
    );
}
 
export default Register;