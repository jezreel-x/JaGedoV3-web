import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import CustomerNavBar from "./CustomerNavBar";
import ChatBot from "../../../pages/customer/customerPortal/ChatBot";

const NavigationBar = lazy(() => import("../../../components/Navigation/NavigationBar"));

const today = new Date().toLocaleDateString();

// Original jobs and orders
const initialJobs = [
  {
    id: 1,
    code: "FOO1",
    status: "Under Review",
    role: "Mason",
    link: "/customer-new-job-under-review",
  },
  {
    id: 2,
    code: "FOO2",
    status: "Unreviewed",
    role: "Mason",
    link: "/customer-new-job-unreviewed",
  },
];

const initialOrders = [
  {
    id: 1,
    code: "FOO1",
    detail: "Details",
    link: "/customer-portal/Quote",
  },
];

// Extra jobs for "View More"
const extraJobs = [
  {
    id: 101,
    code: "P001",
    status: "Under Review",
    role: "Plumber",
    link: "/customer-view-new-prof-job",
  },
  {
    id: 102,
    code: "P002",
    status: "Unreviewed",
    role: "Plumber",
    link: "/customer-view-new-prof-unreviewed-job",
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
    code: "P001",
    detail: "Plumbing Material",
    link: "/customer-portal/Quote1",
  },
  {
    id: 202,
    code: "C001",
    detail: "Contractor Tools",
    link: "/customer-portal/Quote2",
  },
];

function Active() {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllOrders, setShowAllOrders] = useState(false);

  const visibleJobs = showAllJobs ? [...initialJobs, ...extraJobs] : initialJobs;
  const visibleOrders = showAllOrders ? [...initialOrders, ...extraOrders] : initialOrders;

  return (
    <section className="container mx-auto mt-10 px-4">
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <CustomerNavBar />

      <div className="grid gap-4 max-w-4xl mx-auto">
        <ChatBot />

        {/* Jobs Section */}
        <section className="px-4 shadow py-5 rounded-2xl mb-6 mt-2 w-full bg-white">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-700">Jobs</h1>

          {visibleJobs.map((job) => (
            <Link to={job.link} key={job.id}>
              <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer shadow hover:shadow-lg transition-all my-2">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-start mb-3">
                  <span className="font-medium text-gray-800">{job.code}</span>
                  <span className="text-gray-600 font-medium">Managed by Jagedo</span>
                  <span className="text-gray-600 font-medium">Req Date: {today}</span>
                  <span className="text-[rgb(0,0,122)] font-medium sm:justify-self-center">
                    {job.status}
                  </span>
                </div>
                <hr className="border-gray-200 my-3" />
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-start">
                  <span className="text-gray-700 font-medium">{job.role}</span>
                  <span className="text-gray-600 font-medium">Location: Utawala, Nairobi</span>
                  <span className="text-gray-600 font-medium">Start Date: {today}</span>
                  <div className="sm:justify-self-center">
                    <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-end mt-2">
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
        <section className="px-3 shadow py-3 rounded-2xl mb-6 mt-2 w-full bg-white">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-700">Orders</h1>

          {visibleOrders.map((order) => (
            <Link to={order.link} key={order.id}>
              <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer shadow hover:shadow-lg transition-all my-2">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-start mb-3">
                  <span className="font-medium text-gray-800">{order.code}</span>
                  <span className="text-gray-600 font-medium">Managed by Jagedo</span>
                  <span className="text-gray-600 font-medium">Req Date: {today}</span>
                  <span className="text-[rgb(0,0,122)] font-medium sm:justify-self-end">View detail</span>
                </div>
                <hr className="border-gray-200 my-3" />
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-start">
                  <span className="text-gray-700 font-medium">{order.detail}</span>
                  <span className="text-gray-600 font-medium">Location: Utawala, Nairobi</span>
                  <span className="text-gray-600 font-medium">Start Date: {today}</span>
                  <div className="sm:justify-self-end">
                    <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-end mt-2">
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
