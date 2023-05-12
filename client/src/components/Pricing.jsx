import React from "react";
import './Pricing.css'

const Pricing = () => {
  return (
    <>
      <div id="pricing" className="pricing">
        <div className="pricing-lay"></div>
        <div className="max-w-[1240px] mx-auto py-12">
          <div className="textarea-pricing">
            <h2 className="text-3xl uppercase">Pricing</h2>
            <h3 className="text-5xl font-bold text-white py-8">
              The Right Place For Your Fitness Goals
            </h3>
            <p className="text-3xl">Work towards the best version of you.</p>
          </div>
          <div className="grid-price">
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Standard
              </span>
              <div>
                <p className="text-6xl font-bold py-4 flex">
                  $0
                  <span className="text-xl text-slate-500 flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">Free user plan</p>
              <div className="text-2xl">
                <p className="flex py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-8 mr-5 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  1 Free Workout Routine Generated a Month
                </p>
                <p className="flex py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-8 mr-5 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Get A New Workout Routine In Seconds
                </p>
                <button className="w-full py-4 my-4 text-white border bg-blue-600 border-blue-600  hover:bg-transparent hover:text-blue-600 rounded-md">
                  <a href="/register">Get Started</a>
                </button>
              </div>
            </div>
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Premium
              </span>
              <div>
                <p className="text-6xl font-bold py-4 flex">
                  $2.99
                  <span className="text-xl text-slate-500 flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                Access to upcoming new features 👀
              </p>
              <div className="text-2xl">
                <p className="flex py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-8 mr-5 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  No Limit on Workout Routines Generated
                </p>
                <p className="flex py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-8 mr-5 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Access to GymGenie Meal Plan
                </p>
                <p className="flex py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-8 mr-5 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Access to MacroTracker
                </p>
                <button className="w-full py-4 my-4 text-white border bg-blue-600 border-blue-600  hover:bg-transparent hover:text-blue-600 rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
