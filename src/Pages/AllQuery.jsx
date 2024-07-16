import axios from "axios";
import { useState } from "react";


const AllQuery = () => {
    const [products, setProducts] = useState([])
    
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
    });
    return (
      <div>
        <h1>All query </h1>
        <h1>All query </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id}>
              <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                  <img
                    src={product.productUrl}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.productName}</h2>
                  <p>{product.productBrand}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllQuery;