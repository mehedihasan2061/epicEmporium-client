// import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Slide = ({image,text}) => {
    
  return (
    <div
      className="w-full bg-center bg-cover h-52 md:h-[28rem] lg:h-[24rem"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-xl mx-4 md:text-2xl  font-semibold text-white lg:text-3xl">
            {text}
          </h1>
          <br />
         
        </div>
      </div>
    </div>
  );
};

export default Slide;
