import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Typewriter } from "react-simple-typewriter";


const Queries = () => {
    const [productQuery, setProductQuery] = useState([])
    // console.log(import.meta.env.VITE_API_URL);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/products`);
            setProductQuery(data)
        }
        getData()
   },[])
    console.log(productQuery);
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-green-500">
          <Typewriter
            words={["Browse Products By Card"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h1>
        <p className="md:w-1/2 md:mx-auto m-2 font-lato my-6">
          A product card description should be concise yet informative,
          providing potential customers with key details that make the product
          appealing. Here’s a guide on crafting a product card description,
          along with examples for different types of products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5 ">
          {productQuery.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default Queries;