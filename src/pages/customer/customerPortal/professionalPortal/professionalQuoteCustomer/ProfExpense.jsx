import { lazy, Suspense} from "react";
import { useNavigate } from "react-router-dom";

import QuoteNavBar from "./QuoteNavBar";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar")
);

const ProBillSummary = () => {
  const navigate = useNavigate();

  const expenses = [
    { label: "Communication", amount: 75000 },
    { label: "Travel", amount: 15000 },
    { label: "Accommodation", amount: 35000 },
  ];

  return (
    <section className="container mx-auto mt-32 px-4">
    
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <QuoteNavBar />

      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Other Expenses
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">
                  Expense Type
                </th>
                <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                  Amount (Kes)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenses.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-gray-700">{item.label}</td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {item.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 space-y-4 flex flex-col items-end">
        {[
          { label: "Sub-Total (Kes)", value: 125000 },
          // { label: "Total (Kes)", value: 10000000 },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-auto sm:min-w-[260px] p-4 bg-gray-50 border border-gray-300 rounded-lg flex justify-between items-center"
          >
            <span className="text-gray-600 text-sm">{item.label}</span>
            <span className="font-bold text-lg text-gray-900">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => navigate("/professional-quote-creation2")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/professional-grand-summary2")}
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
