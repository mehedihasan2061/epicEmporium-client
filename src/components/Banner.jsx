import { Link } from "react-router-dom";
// import img from "../assets/the-printable-concept-KWylPhCFMaY-unsplash.jpg"
import img from "../assets/images (5).jfif"
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
      <div className="container mx-auto">
        <div className=" sm:w-full flex flex-col md:flex-row justify-center items-center gap-12 p-2 md:p-6 rounded-xl my-10  bg-gradient-to-r from-[#80466c] to-sky-900 ">
          <div className="md:w-[50%]">
            <img className=" md:h-[500px] w-full rounded-xl" src={img} alt="" />
          </div>
          <div className="md:w-[50%]">
            <h1 className="text-3xl flex justify-center sm:text-center font-bold font-caveat text-blue-600 ">
              <Typewriter
                words={["Hi everyone"]}
                loop={0}
                cursor
                cursorStyle="/"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              ></Typewriter>
            </h1>
            <p className="sm:text-center md:text-xl font-semibold font-lato text-white">
              Distinctively grow resource sucking manufactured products after
              stand-alone data. Compellingly iterate magnetic schemas via
              covalent manufactured products. Synergistically streamline
              economically sound technologies whereas principle-centered
              mindshare. Authoritatively exploit interoperable e-services with
              enabled systems. Holisticly reinvent state of the art processes
              for professional niches. Phosfluorescently iterate revolutionary
              imperatives vis-a-vis turnkey e-commerce. Dynamically actualize
              proactive applications via just in time materials. Professionally
              network plug-and-play content for collaborative methods of
              empowerment.
            </p>
            <Link to="/add-query">
              <button className="w-1/2 mx-auto flex justify-center bg-gradient-to-r from-[#8e62db] to-red-600   p-4 text-xl text-white font-bold font-caveat rounded-xl my-3">
                ADD Queries
              </button>
            </Link>
          </div>
        </div>

        {/* <div id="slide6" className="carousel-item flex relative w-full ">
          <img src={img} className="w-full h-[600px] rounded-xl " />
          <div className="absolute  rounded-xl left-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 ">
            <div className="text-white space-y-7  md:pl-12 md:w-1/2 mt-10">
              <h2 className="md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <Link to="/query">
                  <button className="btn btn-outline btn-secondary">
                    Latest Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
};

export default Banner;