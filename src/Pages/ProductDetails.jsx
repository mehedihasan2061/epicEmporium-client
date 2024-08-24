import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import DatePicker from "react-datepicker";

const ProductDetails = () => {
    const { user } = useAuth()
  const product = useLoaderData()
  const navigate=useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    
    const {
        _id,
      productName,
    //   product_boycott,
      productUrl,
      productBrand,
      queryTitle,
        date,
      owner
    } = product;
 console.log(product);

    const handleRecommendation = async e => {
        e.preventDefault()
        if(owner?.email===user?.email)return toast.error('Action not permitted')
        const form = e.target;
        const recommendTitle = form.recommendTitle.value;
        const recommendName = form.recommendName.value;
        const recommendImage = form.recommendImage.value;
        const recommendReason = form.recommendReason.value;
        const email = user?.email;
        const photo = user?.photoURL;
        const userName = user?.displayName;
        const recommendData = {
          queryId: _id,
          recommendTitle,
          recommendName,
          recommendImage,
          recommendReason,
          email,
          photo,
          userName,
          currentDate:startDate,
          owner_email: owner?.email,
          owner
        };
        console.table(recommendData);
        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/recommend`,
              recommendData
            );
            console.log(data);
          toast.success('Recommendation successfully')
          navigate('/my-recommendations')
          
        } catch (err) {
            console.log(err);
        }
        
    }
  return (
    <div className="flex flex-col m-2 md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 ">
            Post: {new Date(date).toLocaleDateString()}
          </span>
          <span>
            <img
              className="border-2 w-24 p-4  h-24 border-purple-600 rounded-full"
              src={productUrl}
              alt=""
            />
          </span>
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            {productBrand}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {productName}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">{queryTitle}.</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Owner Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Name: {owner?.name}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: {owner?.email}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src={owner?.photo} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Place A  Recommend Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Add A Recommendation
        </h2>

        <form onSubmit={handleRecommendation}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Recommendation Title
              </label>
              <input
                id="recommendTitle"
                type="text"
                name="recommendTitle"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Recommended product Name
              </label>
              <input
                id="emailAddress"
                type="text"
                name="recommendName"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Recommended Product Image
              </label>
              <input
                id="productImage"
                name="recommendImage"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 mb-6 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Recommendation reason
              </label>
              <input
                id="recommendReason"
                name="recommendReason"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            {/* <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label> */}

            {/* Date Picker Input Field */}
            {/* </div> */}
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Add Recommendation
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductDetails;
