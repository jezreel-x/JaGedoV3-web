import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteNavBar2 from "./QuoteNavBar2";
import NavigationBar from "../../../../components/Navigation/NavigationBar";

const LOCAL_STORAGE_KEY = "workPlanData";

const ProBillSummary = () => {
  const navigate = useNavigate();

  const [bills, setBills] = useState([]);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setBills(JSON.parse(savedData));
    }
  }, []);

  const calculateDuration = (start, end) => {
    if (!start || !end) return "";
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate - startDate;
    if (isNaN(diffTime)) return "";
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return days >= 0 ? days : "";
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...bills];
    updated[index][field] = value;

    // Automatically calculate duration if startDate or endDate is updated
    if (field === "startDate" || field === "endDate") {
      const start = field === "startDate" ? value : updated[index].startDate;
      const end = field === "endDate" ? value : updated[index].endDate;
      updated[index].duration = calculateDuration(start, end);
    }

    setBills(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  const addNewRow = () => {
    const newBill = {
      id: `B00${bills.length + 1}`,
      name: "",
      startDate: "",
      endDate: "",
      duration: "",
      progress: 0,
    };
    const updated = [...bills, newBill];
    setBills(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  const handleSaveDraft = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bills));
    setSaveMessage("Saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const clearTable = () => {
    setBills([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setSaveMessage("Table cleared.");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8" id="WorkPlan">
        <QuoteNavBar2 />

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Work Plan & Progress</h2>
        {saveMessage && (
          <div className="p-2 mb-4 text-green-700 bg-green-100 rounded text-center">
            {saveMessage}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Bill Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Start</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">End</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Duration</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Progress</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((row, index) => (
                <tr key={row.id} className="border-t border-gray-100 bg-white hover:bg-gray-50">
                  <td className="px-4 py-3">{row.id}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) => handleInputChange(index, "name", e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="date"
                      value={row.startDate}
                      onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="date"
                      value={row.endDate}
                      onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={row.duration}
                      readOnly
                      className="w-full bg-transparent border-b border-gray-300 text-gray-500"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-between mb-1 text-xs">
                      <span className="text-gray-600">{row.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                    <input
                      type="number"
                      value={row.progress}
                      onChange={(e) => handleInputChange(index, "progress", e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 text-xs text-gray-600 focus:outline-none focus:border-blue-500"
                      placeholder="Enter progress %"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="6" className="text-right py-4">
                  <button
                    onClick={addNewRow}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                  >
                    Add Row
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 space-x-4 flex-wrap gap-2">
          <button
            onClick={() => navigate("/professional-portal/jobSpecification")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={handleSaveDraft}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save as Draft
          </button>
          <button
            onClick={() => navigate("/professional-quote-creation")}
            className="bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800"
          >
            Next
          </button>
          <button
            onClick={clearTable}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear Table
          </button>
        </div>
      </div>
    </>
  );
};

export default ProBillSummary;
