import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
     <div className=" flex justify-center min-h-screen bg-gray-100">
      
      <div className="container sm:mt-40 mt-24 mb-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>
        <div className="m-6">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Email Address:
              </label>
              <input
                className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-light mb-2">
                Password
              </label>
              <input
                className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="new-password"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="flex items-center justify-between mb-5">
              <button
                className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"         
              >
                LOGIN
              </button>
              <p className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500">
                <Link to="/forget">Forget your password?</Link>
              </p>
            </div>
            {error && <p variant="danger">{error}</p>}

            <p className="text-center text-md font-light">
              Don't have an account?{" "}
              <Link
                className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                to="/signup"
              >
                Register here.
              </Link>
            </p>
            <button
              className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
          
              onClick={handleGoogleSignIn}
             
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
  </div>










      
    </>
  );
};

export default Login;
