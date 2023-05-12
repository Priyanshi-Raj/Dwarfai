import React from "react";
import './About.css'

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-c">
          <div className="about-t">
            <h2 className="text-5xl font-bold">
              Trusted by people across the world
            </h2>
            <p className="text-3xl py-6 text-gray-500">
              GymGenie has helped people in USA, India, Canada, UAE, and 80 more
              countries
            </p>
          </div>
          <div className="about-grid">
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                100%
              </p>
              <p className="text-gray-400 mt-2">Completion</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                24/7
              </p>
              <p className="text-gray-400 mt-2">Delivery</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                100K
              </p>
              <p className="text-gray-400 mt-2">Workout routines generated</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
