"use client";

import { lazy, Suspense, useState } from "react";
import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(() =>
  import("../../../../components/Navigation/NavigationBar")
);

const Quote = () => {
  const [startDate, setStartDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const calculateDuration = () => {
    if (startDate && deliveryDate) {
      const start = new Date(startDate);
      const end = new Date(deliveryDate);
      const timeDiff = end - start;
      const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return dayDiff > 0 ? dayDiff : 0;
    }
    return 0;
  };

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

      <div className="min-h-screen flex items-start justify-center bg-gray-100 py-20 px-6">
        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-10 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Delivery Timeline</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Delivery Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Delivery Date
              </label>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">Estimated Duration:</p>
            <p className="text-xl font-bold text-blue-900 mt-1">
              {calculateDuration()} {calculateDuration() === 1 ? "day" : "days"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
