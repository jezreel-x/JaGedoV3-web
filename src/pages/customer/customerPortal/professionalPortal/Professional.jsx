import { Link } from "react-router-dom";
import { lazy } from "react";

import PropTypes from "prop-types";
import ManageBySelf from "./form/ManageBySelf";
import ProfessionalNavBar from "./professionalLanding/ProfessionalNavBar";
const NavigationBar = lazy(() => import("../../../../components/Navigation/NavigationBar"));
import Chatbot from "../../../../pages/customer/customerPortal/ChatBot";


// import ManageByJagedo from "./forms/ManageByJagedo";
  const user = JSON.parse(localStorage.getItem("user"));


const Professional = () => (
  <section className="container mx-auto mt-7">
    <NavigationBar />

    <ProfessionalNavBar />
    <Chatbot />
    <header className="px-1">
      <div className="bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Greeting Section */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome, {user.name}</h1>
          </div>

          {/* Navigation Buttons */}
          <nav className="flex flex-col sm:flex-row gap-4">
            {/* <button
              type="button"
              aria-label="View Activities"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 
                       text-base font-medium text-gray-700 bg-gray-100 
                       rounded-lg shadow-sm transition duration-150 
                       hover:bg-gray-200 hover:text-blue-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       active:scale-95"
            >
              <PresentationChartBarIcon className="w-5 h-5" />
              Activities
            </button> */}

            {/* <button
              type="button"
              aria-label="View Projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 
                       text-base font-medium text-gray-700 bg-gray-100 
                       rounded-lg shadow-sm transition duration-150 
                       hover:bg-gray-200 hover:text-blue-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       active:scale-95"
            >
              <RectangleStackIcon className="w-5 h-5" />
              My Projects
            </button> */}
          </nav>
        </div>
      </div>
    </header>
    {/* body */}
    <section className="">
      {/* categories */}
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Fundi Card */}
          <Link to="/customer">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 bg-blue-200">
              <img src="/fundi.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Fundi" />
              <p className="mt-2 text-lg font-semibold text-black">Fundi</p>
            </div>
          </Link>

          {/* Professional Card */}

          <Link to="/customer/request-professional">
            {/* <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[rgba(0,0,122,0.4)] hover:bg-[rgba(0,0,122,0.7)] transition"> */}
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md bg-[rgb(0,0,122)] hover:bg-opacity-70 p-4 transition">
              <img
                src="/professional.png"
                className="h-12 md:h-16 mr-2 md:mr-0"
                alt="Professional"
              />
              <p className="mt-2 text-lg font-semibold text-white">Professional</p>
            </div>
          </Link>

          {/* Contractor Card */}
          <Link to="/customer/request-contractor">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
              <img src="/contractor.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Contractor" />
              <p className="mt-2 text-lg font-semibold text-black">Contractor</p>
            </div>
          </Link>

          {/* Hardware Card */}
          <Link to="/hardware_shop">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
              <img src="/hardware.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Hardware" />
              <p className="mt-2 text-lg font-semibold text-black">Shop App</p>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* request fundi form */}
    <section className="mt-10">
      {/* form */}
      <ManageBySelf />
    </section>
  </section>
);

Professional.propTypes = {
  userName: PropTypes.string,
};

export default Professional;
