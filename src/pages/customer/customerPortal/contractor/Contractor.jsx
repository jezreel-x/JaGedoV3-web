import { Link } from "react-router-dom";
import { lazy } from "react";

import PropTypes from "prop-types";

import ContractorManageByJagedo from "./form/ContractorManageByJagedo";
import ContractorNavBar from "./contractorLanding/ContractorNavBar";
import Chatbot from "../../../../pages/customer/customerPortal/ChatBot";

const NavigationBar = lazy(() => import("../../../../components/Navigation/NavigationBar"));
const user = JSON.parse(localStorage.getItem("user"));

const Contractor = () => (
  <section className="container mx-auto mt-7">
    <NavigationBar />
    <ContractorNavBar />
    <Chatbot />
    <header className="container mx-auto px-1">
      <div className="bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome - {user.name}</h1>
          </div>
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

          {/* Contractor Card */}

          <Link to="/customer/request-professional">
            {/* <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[rgba(0,0,122,0.4)] hover:bg-[rgba(0,0,122,0.7)] transition"> */}
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md bg-blue-200 hover:bg-opacity-70 p-4 transition">
              <img src="/professional.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Contractor" />
              <p className="mt-2 text-lg font-semibold text-black">Professional</p>
            </div>
          </Link>

          {/* Contractor Card */}
          <Link to="/customer/request-contractor">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-[rgb(0,0,122)] hover:bg-opacity-70">
              <img src="/contractor.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Contractor" />
              <p className="mt-2 text-lg font-semibold text-white">Contractor</p>
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
      <ContractorManageByJagedo />
    </section>
  </section>
);

Contractor.propTypes = {
  userName: PropTypes.string, // Add prop validation for 'userName'
};

export default Contractor;
