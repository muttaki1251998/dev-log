// pages/register.js

import React from "react";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/2 bg-white p-8">
        <h2 className="text-2xl font-bold mb-8">Register</h2>
        <form>
          {/* ...rest of form inputs... */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
          </div>
          <div className="mb-4">
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4">
          <div className="flex items-center">
            <hr className="border-t border-gray-400 flex-grow" />
            <span className="px-2 text-gray-500">or sign up with</span>
            <hr className="border-t border-gray-400 flex-grow" />
          </div>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4">
            Google
          </button>
          <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4">
            GitHub
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="relative w-1/2 h-1/2">
          <Image
            src="/images/logo.png" // Replace this with your logo path
            alt="Logo"
            layout="fill"
            objectFit="contain" // This makes the image scale proportionally
          />
        </div>
      </div>
    </div>
  );
}
