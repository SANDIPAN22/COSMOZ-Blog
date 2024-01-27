import { auth } from "@/lib/auth";
import Image from "next/image";

const Home = () => {

    return ( <>

    <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">Welcome to the COSMOZ BLOG 💫</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Expand your knowledge of astronomy by exploring the COSMOZ Blog that will help you grow your understanding of the universe around us.</p>

    </div>
    <div className="overflow-hidden" style={{'maxHeight': '45vh'}}>
      <div className="container px-5">
        <Image src="https://media.baamboozle.com/uploads/images/425544/1644765235_116829_gif-url.gif" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={500} height={500}/>
      </div>
    </div>
  </div>
    </> );
}
 
export default Home;