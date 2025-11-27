"use client";

// import { useState } from "react";
import { lazy, Suspense } from "react";
import { TiTick } from "react-icons/ti";

import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(
  () => import("../../../../components/Navigation/NavigationBar")
);

const Quote = () => {
  // const [products] = useState([
  //   {
  //     id: 1,
  //     image: "/images/tile1.jpg",
  //     name: "Wall Tiles",
  //     quantity: 5,
  //     rate: 800,
  //   },
  //   {
  //     id: 2,
  //     image: "/images/tile2.jpg",
  //     name: "Floor Tiles",
  //     quantity: 10,
  //     rate: 950,
  //   },
  // ]);

  // const calculateTotal = (quantity, rate) => quantity * rate;

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <br />
      <br />
      <br />
      <br />

      <ActiveFundiNav />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
          <h1 className="text-2xl font-semibold text-gray-600 mt-6 mb-4">
            Order Specifications
          </h1>
          {/* Order Details */}
          <div className="p-8 my-6 rounded-xl ">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
              Order Details
            </h2>
            <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex justify-between gap-8">
                {/* Left Column */}
                <div className="w-1/2 space-y-4">
                  {[
                    { label: "Profession", value: "Architect" },
                    { label: "Level", value: "Senior" },
                    { label: "Location", value: "Kenya, Nairobi, Kasarani" },
                    { label: "Start Date", value: "20/05/2025" },
                    { label: "End Date", value: "" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200"
                    >
                      <span className="font-semibold text-gray-800 w-24">
                        {item.label}:
                      </span>
                      <span className="text-gray-700">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="w-1/2 pl-8 border-l border-gray-200 space-y-4">
                  {/* Download Receipt Section */}
                  <div className="flex items-center space-x-2 bg-green-50 p-4 rounded-lg cursor-pointer hover:bg-green-100 transition border border-gray-200">
                    {/* Download Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-6V4m-6 4l3 3 3-3"
                      />
                    </svg>
                    <span className="text-green-700 font-medium">
                      Download Receipt
                    </span>
                  </div>

                  {/* Managed by Jagedo Section */}
                  <div className="bg-blue-50 p-4 rounded-2xl shadow-md border border-gray-200">
                    <h3 className="text-2xl font-bold text-blue-900">
                      Managed by Jagedo
                    </h3>
                  </div>

                  {/* Package Details Section */}
                  <div className="bg-blue-50 p-4 rounded-2xl shadow-md mt-4 border border-gray-200">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      Package details
                    </h3>
                    <p className="text-lg font-semibold text-gray-800">
                      Jagedo Oversees
                    </p>

                    <ul className="space-y-3 mt-4 text-gray-700">
                      <li className="flex items-center">
                        <TiTick className="text-green-500 mr-2 text-xl" />
                        Arrival time
                      </li>
                      <li className="flex items-center">
                        <TiTick className="text-green-500 mr-2 text-xl" />
                        Scope budget
                      </li>
                      <li className="flex items-center">
                        <TiTick className="text-green-500 mr-2 text-xl" />
                        Workmanship for a day
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address Card */}
          <div className="shadow-md rounded-xl p-6 mb-6 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-700 mb-2">
              Delivery Address
            </h2>
            <p className="text-gray-600">Kondele</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
