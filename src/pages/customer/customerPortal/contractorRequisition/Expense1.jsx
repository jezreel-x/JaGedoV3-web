
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuoteNavBar2 from "./QuoteNavBar2";

import NavigationBar from "../../../../components/Navigation/NavigationBar";

const ProBillSummary = () => {
  const navigate = useNavigate();

  const initialExpenses = [
    { label: "Communication", amount: 75000 },
    { label: "Travel", amount: 15000 },
    { label: "Accommodation", amount: 35000 },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [saveMessage, setSaveMessage] = useState("");

  const handleAddRow = () => {
    if (expenses.length < 6) {
      setExpenses([
        ...expenses,
        { label: `New Expense ${expenses.length - 2}`, amount: 0 },
      ]);
    }
  };

  const handleSaveDraft = () => {
    setSaveMessage("Saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const total = expenses.reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

  return (
    <>
        <NavigationBar />

    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
    
     
      <QuoteNavBar2 />

      {/* Project Details Card */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Other Expenses</h2>

        {/* Expenses Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Expense Type</th>
                <th className="px-4 py-3 text-right text-gray-700 font-semibold">Amount (Kes)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenses.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => {
                        const updated = [...expenses];
                        updated[index].label = e.target.value;
                        setExpenses(updated);
                      }}
                      className="w-full px-2 py-1 outline-none text-gray-700 bg-transparent"
                    />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <input
                      type="number"
                      min="0"
                      value={item.amount}
                      onChange={(e) => {
                        const updated = [...expenses];
                        updated[index].amount = Number(e.target.value);
                        setExpenses(updated);
                      }}
                      className="w-full text-right px-2 py-1 outline-none text-gray-600 bg-transparent"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Row Button */}
      <div className="mt-6">
        <button
          type="button"
          className={`${
            expenses.length >= 6
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-800"
          } text-white font-medium py-2 px-5 rounded-md transition duration-300`}
          onClick={handleAddRow}
          disabled={expenses.length >= 6}
        >
          + Add New Row
        </button>
      </div>

      {/* Summary Section */}
      <div className="mt-8 space-y-4 flex flex-col items-end">
        {[
          { label: "Sub-Total (Kes)", value: total },
          { label: "Total (Kes)", value: total },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-auto sm:min-w-[260px] p-4 bg-gray-50 border border-gray-300 rounded-lg flex justify-between items-center"
          >
            <span className="text-gray-600 text-sm">{item.label}</span>
            <span className="font-bold text-lg text-gray-900">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>

      {/* Save Message */}
      {saveMessage && (
        <p className="text-green-600 font-medium mb-4">{saveMessage}</p>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => navigate("/contractor-quote-creation")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={handleSaveDraft}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save as Draft
        </button>

        <button
          onClick={() => navigate("/contractor-bill-summary")}
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
