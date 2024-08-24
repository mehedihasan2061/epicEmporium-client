/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const {user}=useAuth()
  // eslint-disable-next-line react/prop-types
const {
  _id,
  productUrl,
  date,
  productBrand,
  productName,
  queryTitle,
  product_boycott,
  owner,
} = product;

  return (
    <>
      {!user ? (
        <span className="loading loading-bars loading-lg flex justify-center my-auto"></span>
      ) : (
        <div className=" bg-white rounded-lg shadow-lg dark:bg-gray-800 border-gray-600  ">
          <Link
            to={`/product/${_id}`}
            className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <img
              className="object-cover w-full h-64 rounded-t-md"
              src={productUrl}
              alt="Article"
            />

            <div className="p-6 ">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                    {productName}
                  </span>
                  <span className="text-xs font-medium  uppercase bg-orange-600 p-1 rounded text-white dark:text-blue-400">
                    {productBrand}
                  </span>
                </div>
                <a
                  href="#"
                  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  tabIndex="0"
                  role="link"
                >
                  {queryTitle?.substring(0, 60)}...
                </a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {product_boycott?.substring(0, 60)}...
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      className="object-cover  h-10 rounded-full"
                      src={owner?.photo}
                      alt="Avatar"
                    />
                    <a
                      href="#"
                      className="mx-2 font-semibold text-gray-700  dark:text-gray-200"
                      tabIndex="0"
                      role="link"
                    >
                      {owner?.name}
                    </a>
                  </div>
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {new Date(date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductCard;
