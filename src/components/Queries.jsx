import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Queries = () => {
    const [productQuery, setProductQuery] = useState([])
    // axios.get("http://localhost:5000/products")
    // .then(res => {
    //     setProductQuery(res.data)
    // })
    console.log(import.meta.env.VITE_API_URL);
    useEffect(() => {
        const getData = async () => {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/products`
          );
          setProductQuery(data);
        };
        getData();
   },[])
    console.log(productQuery);
    return (
        <div>
            <h1>Queries {productQuery.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    productQuery.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Queries;