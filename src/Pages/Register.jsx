import {  useState } from "react";

import register from "../lottie/Animation - 1720750421440.json"

import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

import Lottie from "react-lottie";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Register = () => {
  const { createUser, updateUserProfile, user, setUser } = useAuth();
  const axiosSecure=useAxiosSecure()
  const navigate=useNavigate()
  // const [success, setSuccess] = useState('')
  const [registerError, setRegisterError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: register,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

  const handleRegister =async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    const userDetails = { name, email, photo, password };
    console.log(userDetails);
    if (password.length < 6) {
      setRegisterError("Please Provide Must Be 6 Character");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setRegisterError("Please provide at least one lowercase");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Please provide at least one Uppercase");
      return;
    }
    //  if (!/[$&+,:;=?@#|'<>.-^*()%!]/.test(password)) {
    //    setRegisterError("Please provide at least one special character");
    //    return;
    //  }
     try {
         const result=   await createUser(email, password)
            toast.success("User create Successfull")
            await updateUserProfile(name, photo)
            setUser({...user,displayName:name,photoURL:photo})
          navigate("/login")
           const { data } = await axiosSecure.post(
             `/jwt`,
             { email: result?.user.email },
             
           );
           console.log(data);
        } catch (err) {
            console.log(err?.message);
            toast.error(err?.message)
        }
  };

  return (
    <div className="hero bg-gradient-to-r from-green-300 to-indigo-500 rounded-xl sm:m-1 md:p-8 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left m-4">
          <p className="py-6">
            <Lottie options={defaultOptions} height={300} width={280} />
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-xl md:text-3xl text-center text-green-500 font-bold my-6">
            Please Register now!
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoURL"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {registerError && (
                <p className="text-red-600 font-bold">{registerError}</p>
              )}
              <p>
                Already have an account !{" "}
                <Link
                  className="text-blue-500 font-semibold underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
