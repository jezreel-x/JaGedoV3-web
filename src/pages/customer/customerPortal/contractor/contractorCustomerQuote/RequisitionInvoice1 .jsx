import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import QuoteNavBar3 from "./QuoteNavBar3";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar")
);

const ProBillSummary = () => {
  const navigate = useNavigate();

  // Prefilled static data
  const rows = [
    {
      description: "200mm vegetable oil excavation",
      qty: 100,
      unit: "M2",
      rate: 200,
      amount: 20000,
    },
    {
      description: "150mm reinforced concrete slab",
      qty: 50,
      unit: "M2",
      rate: 800,
      amount: 40000,
    },
    {
      description: "Steel reinforcement bars",
      qty: 300,
      unit: "Kg",
      rate: 100,
      amount: 30000,
    },
  ];

  const subTotal = rows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <>
    <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
          <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">

      
      <QuoteNavBar3 />

      <div className="bg-white rounded-lg p-4 border border-gray-200 my-5">
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-700 font-medium">Description</th>
                <th className="px-4 py-2 text-gray-600 font-medium">QTY</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Unit</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Rate</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-2">{row.description}</td>
                  <td className="px-4 py-2">{row.qty}</td>
                  <td className="px-4 py-2">{row.unit}</td>
                  <td className="px-4 py-2">{row.rate.toLocaleString()}</td>
                  <td className="px-4 py-2 text-gray-800 font-semibold">{row.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className="flex flex-col items-end gap-4 mt-4">
          <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
            <span className="text-gray-600 text-sm">Sub-Total (Kes)</span>
            <span className="font-bold text-xl">{subTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => navigate("/contractor-workplan3")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/contractor-expense3")}
          className="bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-950"
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default ProBillSummary;
