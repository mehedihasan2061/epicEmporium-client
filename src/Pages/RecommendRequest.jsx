import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const RecommendRequest = () => {
    const { user } = useAuth()
    const [recommendations,setRecommendations]=useState([])
    
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
              `${import.meta.env.VITE_API_URL}/recommendations/${user?.email}`
            );
            setRecommendations(data)
        }
      getData()
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-orange-600 ">
           Recommendations Request
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {recommendations.length} Recommendations
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex  items-center gap-x-3">
                        <span>Recommend Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Product Name</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Product Image</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Product Reason
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Product title
                    </th>

                   
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {recommendations.map((recommend) =>(
                    <tr key={recommend._id}>
                      <td className="px-4 py-4 text-sm text-gray-500 font-semibold  whitespace-nowrap">
                        <div className="flex justify-around items-center ">
                          <div>
                            <img className="h-10 w-10 rounded-full" src={recommend.photo} alt="" />
                          </div>
                          <div>
                            <h3 className="my-2 text-green-600">{recommend.userName}</h3>
                            <h3 className="text-orange-500">{recommend.email}</h3>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm font-semibold text-gray-500  whitespace-nowrap">
                        {recommend.recommendName}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <img
                          className="w-16 h-16 rounded-full"
                          src={recommend.recommendImage}
                          alt=""
                        />
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs"
                          >
                            {recommend.recommendReason}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="font-semibold
                           text-xs"
                          >
                            {recommend.recommendTitle?.substring(0,30)}....
                          </p>
                        </div>
                      </td>

                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendRequest;
