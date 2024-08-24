import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

import NewsLetter from "../components/NewsLetter";
import Preview from "../components/Preview";
import Queries from "../components/Queries";
// import Slider from "../layouts/Slider";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>

      <Banner></Banner>

      <Queries></Queries>

      <Preview></Preview>
     
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
