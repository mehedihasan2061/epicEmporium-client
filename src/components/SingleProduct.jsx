import { useLoaderData, useParams } from "react-router-dom";


const SingleProduct = () => {
    const products = useLoaderData()
    const { id } = useParams()
    // console.log(products,id);
    const item = products.find(product => product._id === id)
    console.log(item);
    return (
        <div>
            <h1>Product card</h1>
        </div>
    );
};

export default SingleProduct;