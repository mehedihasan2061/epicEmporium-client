import Lottie from "react-lottie";
import addQuery from "../lottie/Animation - 1720838226931.json"
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";

const AddQuery = () => {
    const { user } = useContext(AuthContext)
    const name = user?.displayName
    const email = user?.email
  const photo = user?.photoURL;
  
  const [startDate, setStartDate] = useState(new Date());


  const handleAddQuery = e => {
    e.preventDefault()
    const form = e.target;
    const productName = form.name.value;
    const productBrand = form.brand.value;
    const productUrl = form.photoUrl.value;
    const queryTitle = form.query_title.value;
    const product_Boycott = form.product_boycott.value;
    const date = startDate;
        const productInfo = {
            productName,
            productBrand,
            productUrl,
            queryTitle,
            product_Boycott,
            date,
            name,
            email,
            photo
        }
        console.table(productInfo);
        fetch("http://localhost:5000/product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productInfo),
        });
    }
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: addQuery,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div className="bg-gradient-to-r from-cyan-300 to-purple-400 w-[70%] mx-auto p-8 rounded-lg">
        <form onSubmit={handleAddQuery} className="max-w-sm mx-auto ">
          <h1 className="text-3xl flex items-center justify-center text-orange-700  font-bold my-8 ">
            Add{" "}
            <span>
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
              ></Lottie>
            </span>{" "}
            Query
          </h1>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Product Brand"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Image
            </label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              placeholder="Product Image Url"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Query Title
            </label>
            <input
              type="text"
              id="query"
              name="query_title"
              placeholder="Query Title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Boycotting Reason Details
            </label>
            <input
              type="text"
              id="product-boycott"
              name="product_boycott"
              placeholder="Boycotting Reason Details"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-gray-700">Deadline</label>

            {/* Date Picker Input Field */}
            <DatePicker
              className="border p-2 mb-6 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <button
            type="submit"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Query
          </button>
        </form>
      </div>
    );
};

export default AddQuery;