
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import img1 from '../assets/c-d-x-PDX_a_82obo-unsplash.jpg'
import img2 from '../assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg'
import img3 from '../assets/fernando-andrade-potCPE_Cw8A-unsplash.jpg'
import img4 from '../assets/nataliya-melnychuk-51sGDpm5S78-unsplash.jpg'
import img5 from '../assets/the-printable-concept-KWylPhCFMaY-unsplash.jpg'


const Slider= () => {
  return (
    <div className="carousel md:w-full md:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl " />
        <div className="absolute  rounded-xl left-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 ">
          <div className="text-white space-y-7 md:pl-12 md:w-1/2 mt-10">
            <h2 className="md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-600 text-white border-0 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide6" className="btn btn-circle mr-6">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-orange-600 text-white border-0"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src={img2} className="w-full rounded-xl " />
        <div className="absolute  rounded-xl left-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 ">
          <div className="text-white space-y-7 md:pl-12 md:w-1/2 mt-10">
            <h2 className="md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-600 text-white border-0 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle mr-6">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-orange-600 text-white border-0"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img src={img3} className="w-full rounded-xl " />
        <div className="absolute  rounded-xl left-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 ">
          <div className="text-white space-y-7 md:pl-12 md:w-1/2 mt-10">
            <h2 className="md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-600 text-white border-0 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide2" className="btn btn-circle mr-6">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-orange-600 text-white border-0"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src={img4} className="w-full rounded-xl " />
        <div className="absolute  rounded-xl left-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 ">
          <div className="text-white space-y-7 md:pl-12 md:w-1/2 mt-10">
            <h2 className="md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-600 text-white border-0 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle mr-6">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-orange-600 text-white border-0"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full ">
        <img src={img5} className="w-full rounded-xl " />
        <div className="absolute  rounded-xl left-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 ">
          <div className="text-white space-y-7 md:pl-12 md:w-1/2 mt-10">
            <h2 className="md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-600 text-white border-0 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle mr-6">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-orange-600 text-white border-0"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default Slider;