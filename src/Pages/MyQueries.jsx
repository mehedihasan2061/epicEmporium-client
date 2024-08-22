import {  useEffect, useState } from "react";

import useAuth from "../hooks/useAuth";

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";





const MyQueries = () => {
    const { user } = useAuth()
    const [product,setProduct]=useState([])
    useEffect(() => { 
       
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

      const getData = async () => {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/products/${user?.email}`
        );
        setProduct(data);
      };
    
     
    const handleDelete = async (id) => {
        
      try {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/product/${id}`
        );
        console.log(data);
        toast.success("Delete Successful");
        getData()
       
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    };
    
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center text-green-500">
          My Queries 
        </h1>
        <div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
            {product.map((pd) => (
              <div
                key={pd._id}
                className="max-w-xs relative overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <div className="px-4 py-2 ">
                  <div className="">
                    <h1 className="{text-xl font-bold text-gray-800 uppercase dark:text-white">
                      {pd.productName}
                    </h1>
                    <button
                      onClick={() => handleDelete(pd._id)}
                      className=" absolute top-0  right-0 btn btn-sm btn-circle btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {pd.queryTitle?.substring(0, 100)}...
                  </p>
                </div>

                <img
                  className="object-cover w-full h-44 mt-2"
                  src={pd.productUrl}
                  alt="Product"
                />
                <p className="mt-1 flex flex-1 text-sm text-gray-600 dark:text-gray-400 my-4 text-[20px]">
                  {pd.product_boycott?.substring(0, 100)}...
                </p>
                <div className="flex items-center justify-between  px-4 py-2 bg-gray-900">
                  {/* <h1 className="text-lg font-bold text-white">$129</h1> */}
                  <Link to={`/productQuery/${pd._id}`}>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                      View Details
                    </button>
                  </Link>
                  <Link to={`/update/${pd._id}`}>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyQueries;