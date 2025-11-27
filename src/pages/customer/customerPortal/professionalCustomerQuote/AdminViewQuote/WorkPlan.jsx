import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../../../../components/Navigation/NavigationBar";
import QuoteNavBar from "./QuoteNavBar";

const ProBillSummary = () => {
  const navigate = useNavigate();

  const [bills] = useState([
    {
      id: "B001",
      name: "Briefing",
      startDate: "2025-05-15",
      endDate: "2025-06-15",
      duration: "30",
      progress: 0,
    },
    {
      id: "B002",
      name: "Mobilization",
      startDate: "2025-05-15",
      endDate: "2025-06-15",
      duration: "30",
      progress: 0,
    },
  ]);


  // const handleSaveDraft = () => {
  //   setSaveMessage("Saved successfully!");
  //   setTimeout(() => setSaveMessage(""), 3000);
  // };

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
        <QuoteNavBar />

        <h2 className="text-lg font-semibold text-gray-800 mb-6">Work Plan & Progress</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">ID</th>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">Bill Name</th>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">Start</th>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">End</th>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">Duration (days)</th>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">Progress</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((row) => (
                <tr key={row.id} className="border-t border-gray-100 bg-white hover:bg-gray-50">
                  <td className="px-4 py-3">{row.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{row.name}</td>
                  <td className="px-4 py-3">{row.startDate}</td>
                  <td className="px-4 py-3">{row.endDate}</td>
                  <td className="px-4 py-3">{row.duration}</td>
                  <td className="px-4 py-3 w-64">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">{row.progress}%</span>
                      <span className="text-gray-400">
                        {row.startDate} - {row.endDate}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 space-x-4">
          <button
            onClick={() => navigate("/professional-portal/jobSpecification")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
          {/* <button
            onClick={handleSaveDraft}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save as Draft
          </button> */}
          <button
            onClick={() => navigate("/professional-quote-creation")}
            className="bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProBillSummary;
