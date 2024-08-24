import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";


const Update = () => {
     const navigate = useNavigate();
    const product = useLoaderData();
    console.log(product);
     const {
       _id,
       queryTitle,
       productName,
       productBrand,
       productUrl,
       date,
       product_boycott,
      
  } = product || {};
  // console.log(product_boycott);
     const { user } = useAuth();
     const [startDate, setStartDate] = useState(
       new Date(date) || new Date()
     );
     const handleFormSubmit = async (e) => {
       e.preventDefault();
       const form = e.target;
       const productName = form.name.value;
       const productBrand = form.brand.value;
       const date = startDate;
       const productUrl = form.photoUrl.value;
       const queryTitle = form.query_title.value;
       const product_boycott = form.product_boycott.value;
       
       const productData = {
         productName,
         productBrand,
         productUrl,
         date,
         queryTitle,
         product_boycott,

         owner: {
           email: user?.email,
           name: user?.displayName,
           photo: user?.photoURL,
         },
       };
         console.table("details:",productData)

       try {
         const { data } = await axios.put(
           `${import.meta.env.VITE_API_URL}/product/${_id}`,
           productData
         );
         console.log(data);
         toast.success("Product Data Updated Successfully!");
         navigate("/myQueries");
       } catch (err) {
         console.log(err);
         toast.error(err.message);
       }
     };
    return (
      <div className="bg-gradient-to-r from-cyan-300 to-purple-400 w-[70%] mx-auto p-8 rounded-lg">
        <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto ">
          <h1 className="text-3xl flex items-center justify-center text-orange-700  font-bold my-8 ">
            Update Query
          </h1>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={productName}
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
              defaultValue={productBrand}
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
              defaultValue={productUrl}
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
              defaultValue={queryTitle}
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
              defaultValue={product_boycott}
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
            Update Query
          </button>
        </form>
      </div>
    );
};

export default Update;