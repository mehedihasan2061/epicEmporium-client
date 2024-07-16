

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    // console.log(product);
    // eslint-disable-next-line react/prop-types
    const {_id,productUrl,date,productBrand,productName } = product
    // console.log(product);
    
    return (
      <div>
        <div className="card card-compact bg-base-100  shadow-xl">
          <figure>
            <img src={productUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{productName}</h2>
            <p>{productBrand}</p>
            <p>Date: {new Date(date).toLocaleDateString()}</p>
            <div className="card-actions justify-end">
              <button onClick={`/product/${_id}`} className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;