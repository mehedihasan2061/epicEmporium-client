import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";



const QueryDetails = () => {
    const product = useLoaderData()
    console.log(product);
    const {
        date,
      productName,
      productBrand,
      productUrl,
      queryTitle,
      product_boycott,
    } = product;
    return (
      <div>
        <div className="container mx-auto bg-gradient-to-r from-cyan-300 to-purple-400 shadow-xl ">
          <div className="card relative  bg-base-100 md:w-96 mx-auto  shadow-xl">
            <figure>
              <img src={productUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {productName}
                <div className="badge badge-secondary">{productBrand}</div>
              </h2>
              <p>
                <span className="text-green-500 font-bold">
                  Product Title:{" "}
                </span>{" "}
                {queryTitle}
              </p>
              <p>
                <span className="text-green-500 font-bold">
                  Alternation Reason:{" "}
                </span>{" "}
                {product_boycott}
              </p>
              <div className="card-actions justify-end">
                <div className="badge bg-green-500 text-white badge-outline">
                  <span >Date: {new Date(date).toLocaleDateString()}</span>
                </div>
                
              </div>
                    </div>
                    <Link to="/" className="absolute bg-orange-500 text-white p-2 text-4xl">
                        <FaArrowLeft></FaArrowLeft>
                    </Link>
          </div>
        </div>
      </div>
    );
};

export default QueryDetails;