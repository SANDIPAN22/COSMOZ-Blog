import Image from "next/image";

const Loading = () => {
    return ( <center>
    <Image src='/loader.gif' width={200} height={200} alt="Loader gif"></Image>
    </center> );
}
 
export default Loading;