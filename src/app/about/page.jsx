import Image from "next/image";

export const metadata = {
  title: "COSMOZ Blog || About",
  description: "Created by Sandipan",
};

const About = () => {
    return ( <>
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">About "COSMOZ BLOG"</h1>
        <p className="lead">This website is based on NextJS -v14 Framework. Few advantages of NextJS -v14 is mentioned below.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
           
            <ol>
        
        <li>Turbopack:
Replaces Webpack for faster builds, offering significantly quicker server start-up and refresh rates. This enhancement leads to improved developer productivity and faster iteration cycles, crucial for large-scale applications.</li>
        <li>Server Actions (Stable):
Streamlines server-side logic, allowing functions to run securely on the server. This simplifies data mutation workflows and enhances application security, particularly vital for handling sensitive data and complex state management scenarios.</li>
        <li>Partial Prerendering (Preview):
Merges the benefits of SSR, SSG, and ISR, enabling rapid initial static loading with dynamic content streaming. This is key for applications requiring both fast loading times and dynamic content rendering, enhancing both user experience and SEO.</li>
        <li>Metadata Improvements:
Automates the inclusion of essential metadata in the initial page load, ensuring a seamless user experience across devices and themes. This improvement is especially important for responsive design and accessibility.</li>
    </ol>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <Image className="rounded-lg-3" src="https://miro.medium.com/v2/resize:fit:650/1*DofdLH9enWUHwvs3Qmpg2w.jpeg" alt="" width={720}  height={500}/>
      </div>
    </div>

    
    </> );
}
 
export default About;