

import { lazy, Suspense, useState} from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import CustomerNavBar from "./CustomerNavBar";
import ChatBot from "../../../pages/customer/customerPortal/ChatBot";

const NavigationBar = lazy(() => import("../../../components/Navigation/NavigationBar"));

const jobItems = [
  { id: 1, title: "COO1", manager: "Jagedo", location: "Utawala, Nairobi", date: "2024-09-01" },
  { id: 2, title: "COO2", manager: "Jane Doe", location: "Westlands, Nairobi", date: "2024-09-02" },
  { id: 3, title: "COO3", manager: "John Smith", location: "Roysambu, Nairobi", date: "2024-09-03" },
  { id: 4, title: "COO4", manager: "Mary Ann", location: "Kasarani, Nairobi", date: "2024-09-04" },
];

const orderItems = [
  { id: 1, title: "ORD1", manager: "Alex Kim", location: "Donholm, Nairobi", date: "2024-09-01" },
  { id: 2, title: "ORD2", manager: "Grace Lee", location: "Lang'ata, Nairobi", date: "2024-09-02" },
  { id: 3, title: "ORD3", manager: "Mark Stone", location: "Thika Road, Nairobi", date: "2024-09-03" },
  { id: 4, title: "ORD4", manager: "Ann Njeri", location: "Kileleshwa, Nairobi", date: "2024-09-04" },
];

function Active() {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllOrders, setShowAllOrders] = useState(false);

  const renderCard = (item, type) => {
    const linkPath = type === "job" ? "/customer-view-past-job" : "/fundi-portal/active/Quote";

    return (
      <Link to={linkPath} key={`${type}-${item.id}`}>
        <div className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer shadow hover:shadow-lg transition-all my-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center mb-4 text-sm sm:text-base">
            <span className="font-semibold text-gray-800">{item.title}</span>
            <span className="text-gray-600 font-medium">
              Managed by {item.manager === 'Jagedo' ? item.manager : 'Self'}
            </span>
            <span className="text-gray-600 font-medium">Req Date: {item.date}</span>
            <span className="text-blue-900 font-medium text-right sm:text-center fle"> Completed</span>
          </div>

          <hr className="border-gray-200 my-3" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center text-sm sm:text-base">
            <span className="text-gray-700 font-medium">Mason</span>
            <span className="text-gray-600 font-medium">Location: {item.location}</span>
            <span className="text-gray-600 font-medium">Start Date: {item.date}</span>
            <div className="flex justify-start sm:justify-center">
              <FaEye className="text-gray-500 w-5 h-5 hover:text-blue-900 transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section className="container mx-auto mt-12 sm:px-4">
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <CustomerNavBar />

      <div className="grid gap-6 max-w-5xl mx-auto">
        <ChatBot />
        {/* Jobs Section */}
         <section className="bg-white px-4 py-5 shadow rounded-2xl mb-8 mt-4 w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Jobs</h1>
          {(showAllJobs ? jobItems : jobItems.slice(0, 1)).map((item) =>
            renderCard(item, "job")
          )}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-[rgb(0,0,122)] font-semibold hover:underline text-sm"
              onClick={() => setShowAllJobs((prev) => !prev)}
            >
              {showAllJobs ? "View less" : "View more"}
            </button>
          </div>
        </section>

        {/* Orders Section */}
        <section className="bg-white px-4 py-5 shadow rounded-2xl mb-8 mt-4 w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Orders</h1>
          {(showAllOrders ? orderItems : orderItems.slice(0, 1)).map((item) =>
            renderCard(item, "order")
          )}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-blue-900 font-semibold hover:underline text-sm"
              onClick={() => setShowAllOrders((prev) => !prev)}
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
