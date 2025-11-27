import { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation

// import QuoteNavBar from "./QuoteNavBar";
import NavigationBar from "../../components/Navigation/NavigationBar";


const ProBillSummary = () => {
      const navigate = useNavigate();
  
  // const [rows, setRows] = useState([
  //   { no: 1, description: "Professional Fees", amount: "75000" },
  //   { no: 2, description: "Other Expenses", amount: "35000" },
  // ]);


    const [saveMessage, setSaveMessage] = useState("");
  
  // const handleInputChange = (index, field, value) => {
  //   const updatedRows = [...rows];
  //   updatedRows[index][field] = value;
  //   setRows(updatedRows);
  // };


  const handleSaveDraft = () => {
    // You could also store to localStorage or call an API here
    setSaveMessage("Saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <>
      <NavigationBar />

      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
        {/* <QuoteNavBar /> */}

        {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Breakdown</h2> */}

      {/* <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-all my-5">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-700 font-medium">NO</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Description</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-2 text-gray-700">{row.no}</td>
                  <td className="px-4 py-2 text-gray-600">
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) => handleInputChange(index, "description", e.target.value)}
                      className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    <input
                      type="text"
                      value={row.amount}
                      onChange={(e) => handleInputChange(index, "amount", e.target.value)}
                      className="w-full text-right bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

        {/* Summary Section */}
        <div className="flex flex-col items-end gap-4 mt-4">
          <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
            <span className="text-gray-600 text-sm">Total (Kes)</span>
            <span className="font-bold text-xl">10,000,000</span>
          </div>
          <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
            <span className="text-gray-600 text-sm">Jagedo</span>
            <span className="font-bold text-xl">2,000,000</span>
          </div>
          <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
            <span className="text-gray-600 text-sm">Payable to Service Provider</span>
            <span className="font-bold text-xl">8,000,000</span>
          </div>
        </div>

        {/* Save message */}
        {saveMessage && <p className="text-green-600 font-medium mb-4">{saveMessage}</p>}

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 space-x-4">
          <button
            onClick={() => navigate("/professional-payment-breakdown")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Back
          </button>

          <button onClick={handleSaveDraft} className="bg-blue-600 text-white px-4 py-2 rounded">
            Save as Draft
          </button>

          <button
            onClick={() => navigate("/professional-submissions")}
            style={{ backgroundColor: "rgb(0, 0, 122)" }}
            className="hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProBillSummary;
