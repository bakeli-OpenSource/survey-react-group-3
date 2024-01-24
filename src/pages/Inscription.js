// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';

function Inscription() {
    return (
        <div className=" text-black text-left sm:mx-auto sm:w-full sm:max-w-md">

            {/* <p>Allez sur la <Link to="/connexion">page de connexion</Link>.</p> */}
            <form className="flex flex-col bg-white rounded shadow-2xl p-14 mt-10 pt-8 rounded-2xl  " action="">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link to="/connexion" className=" text-indigo-600 hover:text-indigo-500">
              Login with your account
            </Link>
          </p>
                <label className="font-semibold text-base text-black text-left" htmlFor="usernameField">Full Name</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black text-sm border border-blue-300 w-full" type="email" />

                <label className="font-semibold text-base text-black text-left" htmlFor="usernameField">Email address</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black text-sm border border-blue-300 w-full" type="email" />
                <label className="font-semibold text-base text-black text-left mt-3" htmlFor="passwordField">Password</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black border border-blue-300 w-full" type="password" />

                <label className="font-semibold text-base text-black text-left mt-3" htmlFor="confirmPasswordField">Confirm Password</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black border border-blue-300 w-full" type="password" />

                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-white hover:bg-blue-700 w-full">Sign Up</button>


            </form>

        </div>
    );
};

export default Inscription;