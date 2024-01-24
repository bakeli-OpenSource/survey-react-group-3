// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';

function Connexion() {
    return (
        <div className=" text-black text-left sm:mx-auto sm:w-full sm:max-w-md" >

            Bienvenue sur la page de Connexion
            <h1 className="font-bold text-2xl pb-4">Welcome Back :)</h1>
           
            <form className="flex flex-col bg-white rounded shadow-2xl p-14 mt-4 rounded-2xl pt-8 " action="">
            <h2 className="mt-0 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Sign in
         </h2>
                <label className="font-semibold text-base text-black text-left" htmlFor="usernameField">Email address</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black text-sm border border-blue-300 w-full" type="email" />
                <label className="font-semibold text-base text-black text-left mt-3" htmlFor="passwordField">Password</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black border border-blue-300 w-full" type="password" />
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700 w-full">Login</button>

                <h2 className=" mt-6 text-center">
                    <Link
                        to="/inscription"
                        className="font-medium text-indigo-600  hover:text-indigo-500"
                    >
                        sign Up
                    </Link>
                </h2>
            </form>

        </div>
    );
}

export default Connexion;
