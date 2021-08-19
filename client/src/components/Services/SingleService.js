import React from "react";

const SingleService = (props) => {
  const { title, description, price, image } = props.service;

  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-4xl hover:shadow-lg">
      <div className="relative w-full h-52">
        <img
          src={image}
          className="object-cover w-full h-full rounded-t"
          alt="Service"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4 border border-t-0 rounded-b shadow-3xl">
        <div>
          <div className="text-lg font-display font-bold text-2xl mt-2 sm:text-3xl text-red-600">
            {title}
          </div>
          <p className="text-sm py-4 font-body text-gray-800 leading-normal">
            {description.substr(0, 180)}
            {"..."}
          </p>
          <strong className="flex items-end mb-6 text-2xl font-display leading-none text-red-500 lg:text-3xl ">
            ৳ {price} <span className="text-sm"> / day </span>
          </strong>
        </div>
        <div className="flex justify-around mb-4">
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 px-5 font-display font-bold text-base tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-accent-700 focus:shadow-outline focus:outline-none"
          >
            Buy Now
          </button>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-medium transition-colors duration-200 text-red-accent-700 hover:text-red-500"
          >
            View more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleService;