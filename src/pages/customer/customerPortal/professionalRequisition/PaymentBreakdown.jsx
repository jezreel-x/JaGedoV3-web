import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuoteNavBar from "./QuoteNavBar";
import NavigationBar from "../../../../components/Navigation/NavigationBar";

const ProBillSummary = () => {
  const navigate = useNavigate();
  const [saveMessage, setSaveMessage] = useState("");

  const handleSaveDraft = () => {
    setSaveMessage("Saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <>
      <NavigationBar />

      <div className="container mx-auto px-4 py-8 mt-32">
        <QuoteNavBar />
        {/* Milestones Table */}
        <div className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all my-5">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 text-gray-700 font-medium">
                    Milestone
                  </th>
                  <th className="px-4 py-2 text-gray-600 font-medium">
                    % Disbursement
                  </th>
                  <th className="px-4 py-2 text-gray-600 font-medium">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="px-4 py-2 text-gray-700 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                  >
                    First Draft
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                  >
                    50
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                  >
                    500,000
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-4 py-2 text-gray-700 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                  >
                    Last Draft
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                  >
                    50
                  </td>
                  <td
                    className="px-4 py-2 text-gray-600 focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                  >
                    500,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="w-full p-6 rounded-lg flex justify-between items-center bg-gray-50 shadow border border-gray-300">
            <span className="text-gray-600 text-lg">Total (KES)</span>
            <span className="text-2xl font-bold text-blue-900">1, 000,000</span>
          </div>

          <div className="w-full p-6 rounded-lg flex justify-between items-center bg-gray-50 shadow border border-gray-300">
            <span className="text-gray-600 text-lg">Jagedo Commission</span>
            <span className="text-2xl font-bold text-blue-900">300,000</span>
          </div>

          <div className="w-full p-6 rounded-lg flex justify-between items-center bg-gray-50 shadow border border-gray-300">
            <span className="text-gray-600 text-lg">Payable to you</span>
            <span className="text-2xl font-bold text-blue-900">700,000</span>
          </div>
        </div>

        {/* Save message */}
        {saveMessage && (
          <p className="text-green-600 font-medium mt-4">{saveMessage}</p>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8 gap-4">
          <button
            onClick={() => navigate("/professional-payment-breakdown")}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>

          <button
            onClick={handleSaveDraft}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save as Draft
          </button>

          <button
            onClick={() => navigate("/professional-submissions")}
            className="bg-[rgb(0,0,122)] text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-900"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProBillSummary;
