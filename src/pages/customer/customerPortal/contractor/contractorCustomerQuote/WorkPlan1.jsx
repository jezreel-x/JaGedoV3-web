import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import QuoteNavBar3 from "./QuoteNavBar3";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar")
);

const ProBillSummary = () => {
  const navigate = useNavigate();

  // Prefilled, non-editable bill data
  const bills = [
    {
      id: "B001",
      name: "Briefing",
      startDate: "2025-05-15",
      endDate: "2025-06-15",
      duration: "2",
    },
    {
      id: "B002",
      name: "Mobilization",
      startDate: "2025-05-15",
      endDate: "2025-06-15",
      duration: "2",
    },
  ];

  return (
    <>
    <NavigationBar />
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
    
      <Suspense fallback={<div>Loading navigation...</div>}>
        
      </Suspense>
      <QuoteNavBar3 />
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Work Plan</h2>

      <div className="bg-white rounded-lg p-4 border border-gray-200 transition-all my-5">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-700 font-medium">ID</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Bill name</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Expected Start Date</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Expected End Date</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-2">{bill.id}</td>
                  <td className="px-4 py-2">{bill.name}</td>
                  <td className="px-4 py-2">{bill.startDate}</td>
                  <td className="px-4 py-2">{bill.endDate}</td>
                  <td className="px-4 py-2">{bill.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => navigate("/contractor-job-specification")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/contractor-quote-creation")}
          style={{ backgroundColor: "rgb(0, 0, 122)" }}
          className="hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default ProBillSummary;
