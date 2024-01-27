import { auth } from "@/lib/auth";
import Navlinks from "./Navlinks/Navlinks";



const Navbar = async () => {
    const session = await auth()
    console.log("Session DATA ==>", session)
    return ( <>
    <Navlinks session={session}/>
    </> );
}
 
export default Navbar;