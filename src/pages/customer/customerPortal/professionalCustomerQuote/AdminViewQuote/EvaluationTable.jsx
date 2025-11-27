import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import QuoteNavBar2 from "./QuoteNavBar2";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar")
);

// Dummy hashing function (shortens for display)
const hashBuilderId = (id) => {
  return id.slice(0, 4) + "..." + id.slice(-3); // e.g., b12e...e9a
};

const quotations = [
  {
    id: "001-0001",
    builderId: "b12e8c4e9a",
    rating: 3,
    amount: 5000000,
    duration: 30,
    score: "39%",
    remarks: "N/A",
    createdAt: "2025-03-03 10:30 AM",
  },
  {
    id: "001-0002",
    builderId: "f93a7b21aa",
    rating: 4,
    amount: 6000000,
    duration: 20,
    score: "38%",
    remarks: "N/A",
    createdAt: "2025-03-03 11:00 AM",
  },
  {
    id: "001-0003",
    builderId: "c04e6d9dbf",
    rating: 5,
    amount: 1000000,
    duration: 16,
    score: "92%",
    remarks: "N/A",
    createdAt: "2025-03-03 11:45 AM",
  },
  {
    id: "001-0004",
    builderId: "c7f3e27f67",
    rating: 5,
    amount: 1000000,
    duration: 16,
    score: "92%",
    remarks: "N/A",
    createdAt: "2025-03-03 11:45 AM",
  },
  {
    id: "001-0005",
    builderId: "e218d10ac2",
    rating: 5,
    amount: 1000000,
    duration: 16,
    score: "92%",
    remarks: "N/A",
    createdAt: "2025-03-03 11:45 AM",
  },
];

const EvaluationTable = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState("");
  const [selected, setSelected] = useState([]);

  const goToQuoteDetails = () => {
    navigate("/admin-portal/jobSpecification2");
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const StarRating = ({ rating, maxStars = 5 }) => (
    <div className="flex space-x-1 justify-center">
      {[...Array(maxStars)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.381 2.455c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.624 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );

  StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    maxStars: PropTypes.number,
  };

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
  <br></br>
  <br></br>
  <br></br>

      <QuoteNavBar2 />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
        <div className="max-w-7xl w-full mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
            Evaluation Table
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr className="text-sm text-gray-700">
                  <th className="p-3 border-b border-gray-200 text-center">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelected(quotations.map((q) => q.id));
                        } else {
                          setSelected([]);
                        }
                      }}
                      checked={selected.length === quotations.length}
                    />
                  </th>
                  <th className="p-3 border-b border-gray-200 text-center">QTN No</th>
                  <th className="p-3 border-b border-gray-200 text-center">Builder ID</th>
                  <th className="p-3 border-b border-gray-200 text-center">Rating</th>
                  <th className="p-3 border-b border-gray-200 text-center">Amount</th>
                  <th className="p-3 border-b border-gray-200 text-center">Duration</th>
                  <th className="p-3 border-b border-gray-200 text-center">Score</th>
                  <th className="p-3 border-b border-gray-200 text-center">Remarks</th>
                  <th className="p-3 border-b border-gray-200 text-center">Created At</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((quote) => (
                  <tr
                    key={quote.id}
                    className="hover:bg-gray-50 transition cursor-pointer text-sm"
                    onClick={() => goToQuoteDetails(quote.id)}
                  >
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={selected.includes(quote.id)}
                        onChange={() => toggleSelect(quote.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td className="p-3 text-center">{quote.id}</td>
                    <td className="p-3 text-center font-mono text-xs text-gray-500">
                      {hashBuilderId(quote.builderId)}
                    </td>
                    <td className="p-3 text-center">
                      <StarRating rating={quote.rating} />
                    </td>
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

          {/* Evaluation comment section */}
          <div className="mt-6">
            <label className="block text-gray-800 font-medium mb-2">
              Evaluation Comment:
            </label>
            <input
              type="text"
              placeholder="Enter your comment here..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Award button */}
          <div className="flex justify-end">
            <button
              onClick={() => alert("Awarding selected quotations...")}
              className="bg-blue-800 hover:bg-blue-200 text-white font-semibold px-6 py-2 rounded-md shadow-md transition"
            >
              Award
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvaluationTable;
