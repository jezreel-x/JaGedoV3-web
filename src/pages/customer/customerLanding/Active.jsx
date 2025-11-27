
import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import FundiNavBar from "./CustomerNavBar";
import PropTypes from "prop-types";
import ChatBot from "../../../pages/customer/customerPortal/ChatBot";
const NavigationBar = lazy(
  () => import("../../../components/Navigation/NavigationBar")
);

const today = new Date().toLocaleDateString();

function Card({ link }) {
  return (
    <Link to={link}>
    < div className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer shadow hover:shadow-lg transition-all my-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center mb-4 text-sm sm:text-base">
          <span className="font-semibold text-gray-800">FOO1</span>
          <span className="text-gray-600 font-semibold">Managed by Jagedo</span>
          <span className="text-gray-600 font-medium">Req Date: {today}</span>
          <span className="text-[rgb(0,0,122)] font-medium justify-self-end">
            Ongoing
          </span>
        </div>
        <hr className="border-gray-200 my-3" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center text-sm sm:text-base">

          <span className="text-gray-700 font-medium">Mason</span>
          <span className="text-gray-600 font-medium">
            Location: Utawala, Nairobi
          </span>
          <span className="text-gray-600 font-medium">Start Date: {today}</span>
          <div className="justify-self-end">
            <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors mr-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
};

function FundiPortfolio() {
  const [showMoreJobs, setShowMoreJobs] = useState(false);
  const [showMoreOrders, setShowMoreOrders] = useState(false);

  return (
    <section className="container mx-auto mt-12 px-2 sm:px-4">
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <FundiNavBar />
      <ChatBot />    

      <div className="grid gap-6 max-w-5xl mx-auto">
        
        {/* Jobs Section */}
                <section className="bg-white px-4 py-5 shadow rounded-2xl mb-8 mt-4 w-full">

          <h1 className="text-2xl font-semibold text-gray-700">Jobs</h1>

        
          <Card link="/customer-view-active-job" />
          <Card link="/customer-view-active-job" />
          
          {showMoreJobs && (
            <>
               <Card link="/fundi-portal/job-request2" />
               <Card link="/fundi-portal/job-request2" />
               
            </>
          )}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-[rgb(0,0,122)] font-semibold hover:underline text-sm"
              onClick={() => setShowMoreJobs(!showMoreJobs)}
            >
              {showMoreJobs ? "Show less" : "View more"}
            </button>
          </div>
        </section>

        {/* Orders Section */}
        <section className="bg-white px-4 py-5 shadow rounded-2xl mb-8 mt-4 w-full">
       
          <h1 className="text-xl font-semibold text-gray-700">Orders</h1>
          <Card link="/fundi-portal/active/Quote" />
          <Card link="/fundi-portal/active/Quote" />
          {showMoreOrders && (
            <>
              <Card link="/fundi-portal/active/Quote" />
              <Card link="/fundi-portal/active/Quote" />
            </>
          )}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-[rgb(0,0,122)] font-bold hover:underline"
              onClick={() => setShowMoreOrders(!showMoreOrders)}
            >
              {showMoreOrders ? "Show less" : "View more"}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default FundiPortfolio;
