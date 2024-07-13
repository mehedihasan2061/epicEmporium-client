import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash,  FaGoogle } from "react-icons/fa6";
// import login from "../../lottie/login/Animation - 1719690115143.json";
import login from "../lottie/login/Animation - 1719690115143.json"
// import Lottie from "react-lottie";
import Lottie from "react-lottie"
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    console.log(email, password);
    setLoginError(" ");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "success",
          text: "User Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        form.reset("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
 

  return (
    <div className="hero bg-gradient-to-r from-green-300 to-indigo-500 rounded-xl p-8 min-h-screen">
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
          <form onSubmit={handleLogin} className="card-body">
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
              {loginError && (
                <p className="text-red-600 font-bold">{loginError}</p>
              )}
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
