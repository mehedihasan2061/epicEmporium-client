import { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash,  FaGoogle } from "react-icons/fa6";
// import login from "../../lottie/login/Animation - 1719690115143.json";
import login from "../lottie/login/Animation - 1719690115143.json"
// import Lottie from "react-lottie";
import Lottie from "react-lottie"
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

// import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";


const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  // const axiosSecure=useAxiosSecure()
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const from = location.state || "/";
  // const [loginError, setLoginError] = useState("");
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  


  const handleLogin =async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    console.log(email, password);
    

     const result= await signIn(email, password)
      navigate(from, { replace:true});
      toast.success("User Login successfully");
       const { data } = await axios.post(
         `${import.meta.env.VITE_API_URL}/jwt`,
         { email: result?.user.email },{withCredentials:true}
    );
    console.log(data);
       
  };
  

  const handleGoogle =async () => {
    try {
        const result = await googleLogin();
        console.log("Sign In data==>", result);
        navigate("/");
        toast.success("User Login successfully");
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: result?.user?.email },{withCredentials:true}
        );
        console.log(data);
      } catch (err) {
        console.log(err?.message);
        toast.error(err?.message);
      }
  };
 

  return (
    <div className="hero bg-gradient-to-r from-green-300 to-indigo-500 rounded-xl md:p-8 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left lg:flex-row-reverse">
          <h1 className="text-xl md:text-3xl text-white font-bold my-6">
            Please Login now!
          </h1>
          <div>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        </div>
        <div className="card bg-base-100 md:w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <div className="absolute right-3 top-12 text-xl">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                  ></FaEyeSlash>
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)}></FaEye>
                )}
              </div>
              {/* {loginError && (
                <p className="text-red-600 font-bold">{loginError}</p>
              )} */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p>
                Please create an Account ?{" "}
                <Link
                  className="text-blue-500 font-semibold underline"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="form-control mt-6  ">
              <button className="btn btn-primary ">Login</button>
            </div>
            <div className="">
              <button onClick={handleGoogle} className="btn w-full  font-bold">
                <FaGoogle className="text-red-600"></FaGoogle> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
