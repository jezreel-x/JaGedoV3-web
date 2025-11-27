import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import QuoteNavBar from "./QuoteNavBar";

const NavigationBar = lazy(
  () => import("../../../../components/Navigation/NavigationBar")
);

const quotations = [
  {
    id: "001-0001",
    rating: 3,
    amount: 5000000,
    duration: 30,
    score: "39%",
    remarks: "N/A",
    createdAt: "2025-03-03 10:30 AM",
  },
];

const milestones = [
  {
    id: 1,
    percentage: "30%",
    amount: 1500000,
    status: "paid",
    receiptUrl: "/receipts/milestone1.pdf",
  },
  {
    id: 2,
    percentage: "35%",
    amount: 1750000,
    status: "unpaid",
  },
  {
    id: 3,
    percentage: "35%",
    amount: 1750000,
    status: "unpaid",
  },
];

const EvaluationTable = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState(
    "Vendor offers good pricing and acceptable delivery duration. Awaiting technical evaluation for final approval."
  );
  const [selectedMilestones, setSelectedMilestones] = useState({});
  const [uploadedReceipts, setUploadedReceipts] = useState({});

  const goToQuoteDetails = () => {
    navigate("/customer-view-grand-summary");
  };

  const toggleMilestonePay = (id) => {
    setSelectedMilestones((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const StarRating = ({ rating, maxStars = 5 }) => {
    return (
      <div className="flex space-x-1">
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
  };

  StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    maxStars: PropTypes.number,
  };

  const handleReceiptUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedReceipts((prev) => ({
        ...prev,
        [id]: file.name,
      }));
    }
  };

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <QuoteNavBar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Evaluation Table
          </h2>

          {/* Quotation Table */}
          <div className="overflow-auto">
            <table className="w-full bg-white border border-gray-200 rounded-md shadow-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-3 border-b border-gray-200">QTN No</th>
                  <th className="p-3 border-b border-gray-200">Rating</th>
                  <th className="p-3 border-b border-gray-200">Amount</th>
                  <th className="p-3 border-b border-gray-200">
                    Execution Duration (Days)
                  </th>
                  <th className="p-3 border-b border-gray-200">Score</th>
                  <th className="p-3 border-b border-gray-200">Remarks</th>
                  <th className="p-3 border-b border-gray-200">
                    Creation Date & Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((quote) => (
                  <tr
                    key={quote.id}
                    className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    onClick={() => goToQuoteDetails(quote.id)}
                  >
                    <td className="p-3 text-center">{quote.id}</td>
                    <td className="p-4 py-2">
                      <StarRating rating={quote.rating} />
                    </td>
                    <td className="p-3 text-center">
                      {quote.amount.toLocaleString()}
                    </td>
                    <td className="p-3 text-center">{quote.duration}</td>
                    <td className="p-3 text-center">{quote.score}</td>
                    <td className="p-3 text-center">{quote.remarks}</td>
                    <td className="p-3 text-center">{quote.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Evaluation Comment */}
          <div className="mt-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Evaluation Comments:
            </label>
            <textarea
              className="border border-gray-200 p-2 w-full rounded-md shadow-sm"
              rows="3"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          {/* Milestones Card */}
          <div className="bg-gray-50 p-4 rounded-md shadow border">
            <h3 className="text-md font-semibold mb-4 text-gray-700">
              Payment Milestones
            </h3>
            <table className="w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-2">Select to Pay</th>
                  <th className="p-2">Milestones</th>
                  <th className="p-2">Percentage</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {milestones.map((milestone) => (
                  <tr key={milestone.id} className="border-b border-gray-100">
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        checked={!!selectedMilestones[milestone.id]}
                        onChange={() => toggleMilestonePay(milestone.id)}
                        disabled={milestone.status === "paid"}
                      />
                    </td>
                    <td className="p-2 text-center"> {milestone.id}</td>
                    <td className="p-2 text-center">{milestone.percentage}</td>
                    <td className="p-2 text-center">
                      {milestone.amount.toLocaleString()}
                    </td>
                    <td className="p-2 text-center capitalize">
                      {milestone.status}
                    </td>
                    <td className="p-2 text-center">
                      {milestone.status === "paid" ? (
                        <a
                          href={milestone.receiptUrl}
                          className="inline-flex items-center text-blue-600 underline space-x-1"
                          download
                        >
                          {/* Blue Download Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M3 14a1 1 0 011-1h2a1 1 0 000-2H4a3 3 0 000 6h12a3 3 0 000-6h-2a1 1 0 000 2h2a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" />
                            <path d="M7 10V3h6v7h3l-6 6-6-6h3z" />
                          </svg>
                          <span>Download Receipt</span>
                        </a>
                      ) : (
                        <div className="flex flex-col items-center space-y-1">
                          {/* Grayed-out Download Icon with Tooltip */}
                          <div className="relative group cursor-not-allowed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M3 14a1 1 0 011-1h2a1 1 0 000-2H4a3 3 0 000 6h12a3 3 0 000-6h-2a1 1 0 000 2h2a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" />
                              <path d="M7 10V3h6v7h3l-6 6-6-6h3z" />
                            </svg>
                            {/* Tooltip */}
                            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              Download Receipt
                            </div>
                          </div>

                          {/* Hidden File Input with Custom Label */}
                          <label className="text-xs text-gray-500 cursor-pointer hover:text-gray-700 underline">
                            Download Receipt
                            <input
                              type="file"
                              accept="application/pdf"
                              onChange={(e) =>
                                handleReceiptUpload(e, milestone.id)
                              }
                              className="hidden"
                            />
                          </label>

                          {/* Upload confirmation text */}
                          {uploadedReceipts[milestone.id] && (
                            <div className="text-green-600 text-xs mt-1">
                              Uploaded: {uploadedReceipts[milestone.id]}
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            onClick={() => navigate("/customer-view-fund-request")}
            className="mt-4 bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-md self-start"
          >
            Make Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default EvaluationTable;
