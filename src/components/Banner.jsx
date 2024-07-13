import img from "../assets/the-printable-concept-KWylPhCFMaY-unsplash.jpg"

const Banner = () => {
    return (
      <div className="md:h-[600px]">
        <div id="slide6" className="carousel-item relative w-full ">
          <img src={img} className="w-full h-[600px] rounded-xl " />
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
        </div>
      </div>
    );
};

export default Banner;