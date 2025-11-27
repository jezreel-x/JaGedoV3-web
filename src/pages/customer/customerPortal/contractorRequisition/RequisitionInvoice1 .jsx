import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteNavBar2 from "./QuoteNavBar2";

import NavigationBar from "../../../../components/Navigation/NavigationBar";
const LOCAL_STORAGE_KEY = "workPlanData"; // same key used in previous component

const ProBillSummary = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [saveMessage, setSaveMessage] = useState("");

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const parsed = JSON.parse(savedData);

      // Convert work plan format to this quote format
      const quoteData = parsed.map((item) => ({
        activity: item.name || "",
        uom: "Hours",
        qty: Number(item.duration) || 0,
        rate: 0,
        amount: 0,
      }));

      setRows(quoteData);
    }
  }, []);

  // Handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] =
      field === "qty" || field === "rate" ? Number(value) : value;

    // Recalculate amount
    const qty = updatedRows[index].qty || 0;
    const rate = updatedRows[index].rate || 0;
    updatedRows[index].amount = qty * rate;

    setRows(updatedRows);
  };

  const subtotal = rows.reduce((acc, row) => acc + (row.amount || 0), 0);

  const handleSaveDraft = () => {
    localStorage.setItem("quoteData", JSON.stringify(rows));
    setSaveMessage("Saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
        <QuoteNavBar2 />

        <div className="bg-white rounded-lg p-4 border border-gray-200 my-5">
          {/* Table */}
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 text-gray-700 font-medium">Fee</th>
                  <th className="px-4 py-2 text-gray-600 font-medium">UoM</th>
                  <th className="px-4 py-2 text-gray-600 font-medium">QTY</th>
                  <th className="px-4 py-2 text-gray-600 font-medium">Rate</th>
                  <th className="px-4 py-2 text-gray-600 font-medium">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.length > 0 ? (
                  rows.map((row, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={row.activity}
                          onChange={(e) =>
                            handleInputChange(index, "activity", e.target.value)
                          }
                          className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <select
                          value={row.uom}
                          onChange={(e) =>
                            handleInputChange(index, "uom", e.target.value)
                          }
                          className="w-full bg-transparent border-none focus:outline-none text-gray-600"
                        >
                          <option value="">Select</option>
                          <option value="Hours">Hours</option>
                          <option value="Days">Days</option>
                          <option value="Units">Units</option>
                          <option value="Litres">Litres</option>
                          <option value="Kg">Kg</option>
                        </select>
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={row.qty}
                          onChange={(e) =>
                            handleInputChange(index, "qty", e.target.value)
                          }
                          className="w-full bg-transparent border-none focus:outline-none text-gray-600"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={row.rate}
                          onChange={(e) =>
                            handleInputChange(index, "rate", e.target.value)
                          }
                          className="w-full bg-transparent border-none focus:outline-none text-gray-600"
                        />
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {row.amount ? row.amount.toLocaleString() : "0"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-6 text-center text-gray-400 italic"
                    >
                      No data found. Go back and fill the work plan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Subtotal Summary */}
          {rows.length > 0 && (
            <div className="flex flex-col items-end gap-4 mt-4">
              <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
                <span className="text-gray-600 text-sm">Sub-Total (Kes)</span>
                <span className="font-bold text-xl">
                  {subtotal.toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Save message */}
        {saveMessage && (
          <p className="text-green-600 font-medium mb-4">{saveMessage}</p>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 space-x-4">
          <button
            onClick={() => navigate("/professional-workplan")}
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
            onClick={() => navigate("/professional-expense")}
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
