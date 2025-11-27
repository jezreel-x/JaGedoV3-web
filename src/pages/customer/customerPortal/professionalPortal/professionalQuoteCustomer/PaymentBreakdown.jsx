import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

import QuoteNavBar from "./QuoteNavBar";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar")
);


const ProBillSummary = () => {
  const navigate = useNavigate();

  // const rows = [
  //   { no: 1, description: "Professional Fees", amount: "750,000" },
  //   { no: 2, description: "Other Expenses", amount: "35,000" },
  // ];

  return (
    <section className="container mx-auto mt-32 px-4">

      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <QuoteNavBar />

      {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Payment Breakdown
      </h2> */}

      {/* <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all my-5">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-700 font-medium">NO</th>
                <th className="px-4 py-2 text-gray-600 font-medium">
                  Description
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium text-right">
                  Amount (Kes)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-2 text-gray-700">{row.no}</td>
                  <td className="px-4 py-2 text-gray-600">{row.description}</td>
                  <td className="px-4 py-2 text-gray-600 text-right">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
        {/* Milestones Table */}
        <div className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all my-5">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 text-gray-700 font-medium">Milestone</th>
                  <th className="px-4 py-2 text-gray-600 font-medium">% Disbursement</th>
                  <th className="px-4 py-2 text-gray-600 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="px-4 py-2 text-gray-700 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}>
                    Milestone 1
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}>
                    100
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}>
                    275,000
                  </td>
                </tr>
                {/* <tr>
                  <td
                    className="px-4 py-2 text-gray-700 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}>
                    Final Draft
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}>
                    50
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}>
                    500,000
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

      {/* Summary Section */}
      <div className="flex flex-col items-end gap-4 mt-4">
        <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">Total (Kes)</span>
          <span className="font-bold text-xl">275,000</span>
        </div>
        <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">Jagedo Commission</span>
          <span className="font-bold text-xl">82,500</span>
        </div>
        <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">Payable to you</span>
          <span className="font-bold text-xl">192,500</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => navigate("/professional-payment-breakdown2")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/professional-submissions2")}
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
