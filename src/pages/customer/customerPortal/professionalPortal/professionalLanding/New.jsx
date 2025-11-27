
import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import ProfessionalNavBar from "./ProfessionalNavBar";
import ChatBot from "../../../../../pages/customer/customerPortal/ChatBot";

const NavigationBar = lazy(() =>
  import("../../../../../components/Navigation/NavigationBar")
);

const today = new Date().toLocaleDateString();

const jobItems = [
  {
    id: 1,
    code: "POO1",
    status: "Under Review",
    role: "Architect",
    link: "/customer-view-new-prof-job",
  },
  {
    id: 2,
    code: "POO2",
    status: "Unreviewed",
    role: "Architect",
    link: "/customer-view-new-prof-unreviewed-job",
  },
];

const orderItems = [
  {
    id: 1,
    code: "POO1",
    status: "Under Review",
    role: "Architect",
    link: "/customer-portal/Quote1",
  },
];

function Active() {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllOrders, setShowAllOrders] = useState(false);

  // Extra jobs for "View More"
const extraJobs = [
  {
    id: 101,
    code: "F001",
    status: "Under Review",
    role: "Plumber",
    link: "/customer-new-job-under-review",
  },
  {
    id: 102,
    code: "F002",
    status: "Unreviewed",
    role: "Plumber",
    link: "/customer-new-job-unreviewed",
  },
  {
    id: 103,
    code: "C001",
    status: "Under Review",
    role: "Contractor",
    link: "/customer-view-cont-new-job",
  },
  {
    id: 104,
    code: "COO2",
    status: "Unreviewed",
    role: "Contractor",
    link: "/customer-view-cont-new-job-unreviewed",
  },
];

 // Extra orders for "View More"
const extraOrders = [
  {
    id: 201,
    code: "F001",
    detail: "Plumbing Material",
    link: "/customer-portal/Quote",
  },
  {
    id: 202,
    code: "C001",
    detail: "Contractor Tools",
    link: "/customer-portal/Quote2",
  },
];

  const visibleJobs = showAllJobs ? [...jobItems, ...extraJobs] : jobItems;
  const visibleOrders = showAllOrders ? [...orderItems, ...extraOrders] : orderItems;

  return (
    <section className="container mx-auto mt-10 px-2 sm:px-4">
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <ProfessionalNavBar />

      <div className="grid gap-4 max-w-5xl mx-auto">
        <ChatBot />

        {/* Jobs Section */}
        <section className="bg-white px-4 py-5 shadow rounded-2xl mb-6 mt-2 w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">Jobs</h1>

          {visibleJobs.map((job) => (
            <Link to={job.link} key={job.id}>
              <div className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer shadow hover:shadow-lg transition-all my-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center mb-2 text-sm sm:text-base">
                  <span className="font-semibold text-gray-800">{job.code}</span>
                  <span className="text-gray-600 font-medium">Managed by Jagedo</span>
                  <span className="text-gray-600 font-medium">Req Date: {today}</span>
                  <span className="text-[rgb(0,0,122)] font-medium text-right sm:text-center">
                    {job.status}
                  </span>
                </div>
                <hr className="border-gray-200 my-2" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center text-sm sm:text-base">
                  <span className="text-gray-700 font-medium">{job.role}</span>
                  <span className="text-gray-600 font-medium">Location: Utawala, Nairobi</span>
                  <span className="text-gray-600 font-medium">Start Date: {today}</span>
                  <div className="flex justify-start sm:justify-center">
                    <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-end mt-1">
            <button
              type="button"
              onClick={() => setShowAllJobs(!showAllJobs)}
              className="text-[rgb(0,0,122)] font-bold hover:underline"
            >
              {showAllJobs ? "View less" : "View more"}
            </button>
          </div>
        </section>

        {/* Orders Section */}
        <section className="bg-white px-4 py-5 shadow rounded-2xl mb-6 mt-2 w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">Orders</h1>

          {visibleOrders.map((order) => (
            <Link to={order.link} key={order.id}>
              <div className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer shadow hover:shadow-lg transition-all my-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center mb-2 text-sm sm:text-base">
                  <span className="font-semibold text-gray-800">{order.code}</span>
                  <span className="text-gray-600 font-medium">Managed by Jagedo</span>
                  <span className="text-gray-600 font-medium">Req Date: {today}</span>
                  <span className="text-[rgb(0,0,122)] font-medium text-right sm:text-center">
                    {order.status}
                  </span>
                </div>
                <hr className="border-gray-200 my-2" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center text-sm sm:text-base">
                  <span className="text-gray-700 font-medium">{order.role}</span>
                  <span className="text-gray-600 font-medium">Location: Utawala, Nairobi</span>
                  <span className="text-gray-600 font-medium">Start Date: {today}</span>
                  <div className="flex justify-start sm:justify-center">
                    <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-end mt-1">
            <button
              type="button"
              onClick={() => setShowAllOrders(!showAllOrders)}
              className="text-[rgb(0,0,122)] font-bold hover:underline"
            >
              {showAllOrders ? "View less" : "View more"}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Active;
