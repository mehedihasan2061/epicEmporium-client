import img1 from "../assets/IMG-20220812-WA0063.jpg"
import img2 from "../assets/IMG20240608183419.jpg"
import img3 from "../assets/1704893373298 (1)-01.jpeg"
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";


const Preview = () => {
  return (
    <div>
      <h1 className="text-4xl text-green-500 font-caveat text-center font-bold my-10">Customer Review!!</h1>
      <p className="w-1/2 mx-auto font-lato">
        Excellent service! The product arrived on time and in perfect condition.
        Customer support was responsive and helpful. I'm extremely satisfied
        with my purchase and will definitely shop here again
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={img1}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            <div className="flex gap-2">
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
            </div>
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            The product is highly effective, easy to use, and offers great value
            for money. Some minor flaws, but overall highly recommended
          </p>

          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              tabIndex="0"
              role="link"
            >
              Mehedi
            </a>
          </div>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={img2}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            <div className="flex gap-2">
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStarHalfAlt className="text-yellow-300"></FaStarHalfAlt>
              </span>
            </div>
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Great product! Excellent quality, easy to use, and reliable. A bit
            pricey but worth it. Highly recommend for everyday use.
          </p>

          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              tabIndex="0"
              role="link"
            >
              Hasan
            </a>
          </div>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={img3}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            <div className="flex gap-2">
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaStar className="text-yellow-300"></FaStar>
              </span>
              <span>
                <FaRegStar></FaRegStar>
              </span>
            </div>
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            This product exceeded my expectations with its quality and ease of
            use. However, it’s slightly overpriced compared to similar options.
          </p>

          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              tabIndex="0"
              role="link"
            >
              Foysal Ahammed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
