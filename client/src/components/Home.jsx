import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
    
      <div className="homediv">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 firstdiv">
          <h1 className="text-5xl md:text-7xl font-bold  md:text-left mb-5">
            Get{" "}
            <span className="tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              fit
            </span>{" "}
            with{" "}
            <span className="font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              AI
            </span>
          </h1>
          <p className="text-2xl font-bold  md:text-left mb-5">
            Introducing GymGenie: tailored workout routines for{" "}
            <span className="tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              you&nbsp;
            </span>
          </p>
          <div className="flex flex-col">
            <p className="text-2xl font-bold  md:text-left mb-5">
              ✨ Just Released ✨
            </p>
            <p className="text-2xl font-bold  md:text-left mb-5">
              <span className="tracking-tight text-sky-700">
                {/* <button className="gymplan">GymGenie MealPlan 🥗&nbsp;</button> */}
                GymGenie MealPlan 🥗&nbsp;
              </span>
              <br />
              Supercharge your personalized workout with AI-powered meal plans
              tailored to your fitness goals&nbsp;
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold  md:text-left mb-5">
              <span className="tracking-tight  homemacro">
                MacroTracker ✏️&nbsp;
              </span>
              <br />
              Effortlessly enter your food and snacks and get an instant
              analysis of calories, protein, carbohydrates, and fats&nbsp;
            </p>
          </div>
          <p>
            <span>1,128,537</span> workout routines generated so far.
          </p>
          <p className="flex pt-2  text-slate-600 md:text-left mb-5">
            No credit card required.
          </p>
          <button className=" getstarted mt-5 bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 text-white border-0 hover:bg-gradient-to-r hover:from-purple-700 hover:via-purple-700 hover:to-indigo-700 py-3 px-6 font-bold rounded-md transition duration-150 ease-in-out">
            Get started
          </button>
        </div>
        <div className="flex items-center justify-center text-center seconddiv">
          <span className="text-9xl text-center">🧞‍♂️</span>
        </div>
      </div>
    </>
  );
};

export default Home;
