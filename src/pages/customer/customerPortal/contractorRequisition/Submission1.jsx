import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuoteNavBar2 from "./QuoteNavBar2";
import NavigationBar from "../../../../components/Navigation/NavigationBar";
const ProBillSummary = () => {
  const navigate = useNavigate();

  const [saveMessage, setSaveMessage] = useState("");

  const handleSaveDraft = () => {
    // Simulate save logic
    setSaveMessage("Saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <>
    
        <NavigationBar />

        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">

      <QuoteNavBar2 />
      

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
                    First Draft
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
                    375,000
                  </td>
                </tr>
                <tr>
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
                    375,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Save message */}
        {saveMessage && <p className="text-green-600 font-medium mt-4">{saveMessage}</p>}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
          <button
            onClick={() => navigate("/contractor-bill-summary")}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
            Back
          </button>

          <button onClick={handleSaveDraft} className="bg-blue-600 text-white px-4 py-2 rounded">
            Save as Draft
          </button>

          <button
            type="button"
            onClick={() => navigate("/contractor-attachments")}
            style={{ backgroundColor: "rgb(0, 0, 122)" }}
            className="hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg">
            Next
          </button>
        </div>
      </div>

    
    </>
  );
};

export default ProBillSummary;
