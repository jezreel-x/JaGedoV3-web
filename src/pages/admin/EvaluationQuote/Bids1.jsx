
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = lazy(
  () => import("../../../components/Navigation/NavigationBar2")
);

const quotations = [
  { id: "001-0001", rating: 5, amount: 5000000, duration: 30, score: "39%", remarks: "N/A", createdAt: "2025-03-03 10:30 AM" },
  { id: "001-0002", rating: 4, amount: 6000000, duration: 20, score: "38%", remarks: "N/A", createdAt: "2025-03-03 11:00 AM" },
  { id: "001-0003", rating: 3, amount: 1000000, duration: 16, score: "92%", remarks: "N/A", createdAt: "2025-03-03 11:45 AM" }
];

const EvaluationTable = () => {
  const [selectedQuotations, setSelectedQuotations] = useState([]);
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  const toggleSelection = (id) => {
    setSelectedQuotations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const handleNext = () => {
    navigate("/adminquoteBidders");
  };

  const handleRowClick = () => {
    navigate("/professional-portal/jobSpecification2");
  };

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-6xl w-full min-h-[85vh] mx-auto p-6 bg-white shadow-md rounded-md flex flex-col">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Evaluation Table</h2>

          <div className="flex-grow overflow-auto">
          <div className="overflow-auto">

            <table className="w-full bg-white border border-gray-200 rounded-md shadow-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                <th className="p-3 border-b border-gray-200">Select</th>
                  <th className="p-3 border-b border-gray-200">QTN No</th>
                  <th className="p-3 border-b border-gray-200">Rating</th>
                  <th className="p-3 border-b border-gray-200">Amount</th>
                  <th className="p-3 border-b border-gray-200">Execution Duration (Days)</th>
                  <th className="p-3 border-b border-gray-200">Score</th>
                  <th className="p-3 border-b border-gray-200">Remarks</th>
                  <th className="p-3 border-b border-gray-200">Creation Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((quote) => (
                  <tr
                    key={quote.id}
                    className="border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition"
                    onClick={handleRowClick}
                  >
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedQuotations.includes(quote.id)}
                        onChange={() => toggleSelection(quote.id)}
                      />
                    </td>
                    <td className="p-3 text-center">{quote.id}</td>
                    <td className="p-3 text-center">{quote.rating}</td>
                    <td className="p-3 text-center">{quote.amount.toLocaleString()}</td>
                    <td className="p-3 text-center">{quote.duration}</td>
                    <td className="p-3 text-center">{quote.score}</td>
                    <td className="p-3 text-center">{quote.remarks}</td>
                    <td className="p-3 text-center">{quote.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-semibold">Evaluation Comments:</label>
            <textarea
              className="border border-gray-200 p-2 w-full rounded-md shadow-sm"
              rows="3"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="mt-4 bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-md self-start"
            onClick={handleNext}
          >
            Award
          </button>
        </div>
      </div>
    </>
  );
};

export default EvaluationTable;









