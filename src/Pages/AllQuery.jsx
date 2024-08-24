
import {  useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";
import { Link } from "react-router-dom";


const AllQuery = () => {
 
  // const axiosSecure=useAxiosSecure()
  const [products, setProducts] = useState([])
   
    
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/products`);
      setProducts(data)
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // console.log(products);
    return (
      <div>
        <h1 className="text-orange-500 font-bold my-10">All Recommendation : {products.length} </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg dark:bg-gray-800 border-gray-600 "
            >
              <Link
                to={`/product/${product._id}`}
                className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
              >
                <img
                  className="object-cover w-full h-64 rounded-t-md"
                  src={product.productUrl}
                  alt="Article"
                />

                <div className="p-6">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                        {product.productName}
                      </span>
                      <span className="text-xs font-medium  uppercase bg-orange-600 p-1 rounded text-white dark:text-blue-400">
                        {product.productBrand}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                      tabIndex="0"
                      role="link"
                    >
                      {product.queryTitle?.substring(0, 70)}...
                    </a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {product.product_Boycott?.substring(0, 100)}...
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          className="object-cover  h-10 rounded-full"
                          src={product.owner?.photo}
                          alt="Avatar"
                        />
                        <a
                          href="#"
                          className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                          tabIndex="0"
                          role="link"
                        >
                          {product.owner?.name}
                        </a>
                      </div>
                      <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                        {new Date(product?.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllQuery;