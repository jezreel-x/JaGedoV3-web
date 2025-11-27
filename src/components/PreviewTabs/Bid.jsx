
import {  Suspense } from "react";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../../components/Navigation/NavigationBar";


const ProBillSummary = () => {
  const navigate = useNavigate();
  const rows = [
    {
      activity: "Project briefing",
      uom: "Hours",
      qty: 5,
      rate: 15000,
      amount: 75000,
    },
  ];

  const subtotal = rows.reduce((acc, row) => acc + row.amount, 0);

  return (
    <section className="container mx-auto mt-32 px-4">
    
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <div className="bg-white rounded-lg p-4 shadow transition-all my-5">
     
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-700 font-medium">Fee</th>
                <th className="px-4 py-2 text-gray-600 font-medium">UoM</th>
                <th className="px-4 py-2 text-gray-600 font-medium">QTY</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Rate</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-2 text-gray-700">{row.activity}</td>
                  <td className="px-4 py-2 text-gray-600">{row.uom}</td>
                  <td className="px-4 py-2 text-gray-600">{row.qty}</td>
                  <td className="px-4 py-2 text-gray-600">
                    {row.rate.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {row.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subtotal Summary */}
        <div className="flex flex-col items-end gap-4 mt-4">
          <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
            <span className="text-gray-600 text-sm">Sub-Total (Kes)</span>
            <span className="font-bold text-xl">
              {subtotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => navigate("/professional-workplan2")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/professional-expense2")}
          style={{ backgroundColor: "rgb(0, 0, 122)" }}
          className="hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProBillSummary;
