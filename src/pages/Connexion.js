
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios.js";

function Connexion() {
  const { setCurrentUser, setUserToken, setLoading } = useStateContext();
  const navitage = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
   

    axiosClient
      .post("/login", {
        email,
        password,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        localStorage.setItem('token', data.token);
        setLoading(true);
        console.log(data);
        alert(`Bienvenu ${data.user.name}`);
        navitage('/Form', { replace: true });
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          console.log(finalErrors);
         
        }
        console.error(error);
      });
  };








  return (
    <div className="text-black text-left sm:mx-auto sm:w-full sm:max-w-md ">
      <form onSubmit={onSubmit} className="flex flex-col bg-white rounded shadow-2xl p-14 mt-10 pt-8 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-200" action="">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link to="/inscription" className="text-indigo-700 hover:text-indigo-500">
            Sign up with your account
          </Link>
        </p>
  
        <label className="font-semibold text-base text-black text-left" htmlFor="emailField">Email address</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black text-sm border border-blue-300 w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
  
        <label className="font-semibold text-base text-black text-left mt-3" htmlFor="passwordField">Password</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black border border-blue-300 w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
  
        <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-white hover:bg-blue-700 w-full">Sign In</button>
      </form>
    </div>
  );
         
}

export default Connexion




