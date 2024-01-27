"use client"

import { handleLogout } from "@/lib/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = ({session}) => {
    
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">COSMOZ BLOG</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className={`nav-link ${usePathname() === '/' && 'active'}` } aria-current="page" href="/">Home</Link>
        <Link className={`nav-link ${usePathname() === '/blog' && 'active'}` } href="/blog">Blog</Link>
        <Link className={`nav-link ${usePathname() === '/about' && 'active'}` } href="/about">About</Link>
        
        </div>
        <div className="">
        {session ? 
            <>
            <Link className={`btn btn-success text-light opt-buttons` } href="/blog/create">Create Blog</Link>
            <button className={`btn btn-danger text-light opt-buttons` } onClick={()=>handleLogout()}>Logout</button>
            <span>Logged in as: </span><b>{session.user?.email}</b>
            </>
        :
            <>
            <Link className={`btn btn-primary text-light opt-buttons` } href="/login">Login</Link>
            <Link className={`btn btn-primary text-light opt-buttons` } href="/register">Register</Link>
            </>
        }
      
      </div>
    </div>
  </div>
</nav>
    </>
}
 
export default Navlinks;