import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

import QuoteNavBar3 from "./QuoteNavBar3";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar2")
);

const ProBillSummary = () => {
  const navigate = useNavigate();

  // Pre-filled data
  const billItems = [
    { id: 1, description: "Substructure", amount: "7,000,000" },
    { id: 2, description: "Superstructure", amount: "3,000,000" },
    { id: 3, description: "Roofing", amount: "2,000,000" },
    { id: 4, description: "Finishing", amount: "1,000,000" },
  ];

  return (
    <>
     {/* Lazy-loaded NavigationBar */}
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
    
     

      <QuoteNavBar3 />

      {/* Bill Summary Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-4">Bill Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 font-semibold border">BILL NO</th>
                <th className="p-3 font-semibold border">DESCRIPTION</th>
                <th className="p-3 font-semibold border">AMOUNT (KES)</th>
              </tr>
            </thead>
            <tbody>
              {billItems.map((item) => (
                <tr key={item.id} className="bg-white">
                  <td className="p-3 border">{item.id}</td>
                  <td className="p-3 border">{item.description}</td>
                  <td className="p-3 border">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex flex-col items-end gap-4 mt-4">
        {/* Total (Kes) Tile */}
        <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">Total (Kes)</span>
          <span className="font-bold text-xl">13,000,000</span>
        </div>

        {/* JaGedo Tile */}
        <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">JaGedo Commission</span>
          <span className="font-bold text-xl">750,000</span>
        </div>

        {/* Payable to Service Provider Tile */}
        <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">
            Payable to you
          </span>
          <span className="font-bold text-xl">12,250,000</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
        <button
          onClick={() => navigate("/contractor-expense3")}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => navigate("/contractor-submissions3")}
          style={{ backgroundColor: "rgb(0, 0, 122)" }}
          className="hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default ProBillSummary;
