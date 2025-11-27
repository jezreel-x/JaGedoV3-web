import { useState } from "react";

const AdminConfirmation = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showFundRequest, setShowFundRequest] = useState(false);

  const jobDetails = [
    {
      skill: "Mason",
      level: "Master",
      location: "Kenya, Nairobi, Kasarani",
      startDate: "20/11/2023",
      endDate: "12/12/2024",
    },
  ];

  const handleDownloadFundRequest = () => {
    const data = `
      Funds Request Report
      =====================
      Fund Request to: Brian Muchui
      Type: Architect
      Request Type: Managed by JaGedo
      Request ID: #Fr732164
      FR Date: 03/04/2025
  
      Items:
      1. Design Consultation - Qty: 1 - Rate: KES 5,000 - Amount: KES 5,000
      2. Blueprint Drafting - Qty: 2 - Rate: KES 4,500 - Amount: KES 9,000
      3. Project Supervision - Qty: 1 - Rate: KES 6,500 - Amount: KES 6,500
  
      Subtotal: KES 20,500
      Total: KES 20,500
  
      Payment Method: Bank Transfer
      Account Name: JaGedo Innovations Limited
      Bank: Kenya Commercial Bank
      Branch: Kipande House Branch
      Account No: 1326749757
    `;

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "fund-request-report.txt";
    link.click();

    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Admin Payment Confirmation
      </h2>

      {/* Job Details Section */}
      <div className="w-full max-w-2xl mb-6">
        <button
          type="button"
          className="border border-gray-300 px-6 py-3 w-full flex justify-between items-center bg-white shadow-sm rounded-md hover:bg-gray-100"
          onClick={() => setShowDetails(!showDetails)}
        >
          Job Details
          <span className="text-lg text-gray-600">
            {showDetails ? "▲" : "▼"}
          </span>
        </button>

        {showDetails && (
          <div className="mt-4 space-y-6">
            {jobDetails.map((job, index) => (
              <div
                key={index}
                className="p-8 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
                  Job Details {index + 1}
                </h2>
                <div className="flex justify-between gap-8">
                  <div className="w-1/2 space-y-4">
                    {[
                      { label: "Skill", value: job.skill },
                      { label: "Level", value: job.level },
                      { label: "Location", value: job.location },
                      { label: "Start Date", value: job.startDate },
                      { label: "End Date", value: job.endDate },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <span className="font-semibold text-gray-800 w-24">
                          {item.label}:
                        </span>
                        <span className="text-gray-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end mt-2">
          <button
            type="button"
            className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Download Report
          </button>
        </div>
      </div>

      {/* fund request details */}
      <div className="border border-gray-300 p-8 w-full max-w-3xl mb-6 flex flex-col justify-between bg-white shadow-sm rounded-md">
        <button
          type="button"
          className="border border-gray-300 px-6 py-3 w-full flex justify-between items-center bg-white shadow-sm rounded-md hover:bg-gray-100 mb-4"
          onClick={() => setShowFundRequest(!showFundRequest)}
        >
          Fund Request Details
          <span className="text-lg text-gray-600">
            {showFundRequest ? "▲" : "▼"}
          </span>
        </button>

        {showFundRequest && (
          <div className="p-6 bg-white shadow-lg rounded-lg space-y-6">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b pb-4">
              <img src="/logo.png" alt="Company Logo" className="h-12 w-auto" />
              <div className="text-right">
                <h2 className="text-xl font-bold text-gray-800">
                  Funds Request
                </h2>
                <p className="text-gray-700 font-semibold">#Fr732164</p>
                <p className="text-gray-600">FR Date: 03/04/2025</p>
              </div>
            </div>

            {/* Fund Request Details */}
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <p className="font-semibold">
                Fund Request to:{" "}
                <span className="font-normal">Brian Muchui</span>
              </p>
              <p className="font-semibold">
                Type: <span className="font-normal">Architect</span>
              </p>
              <p className="font-semibold">
                Request Type:{" "}
                <span className="font-normal">Managed by JaGedo</span>
              </p>
            </div>

            {/* Items Table */}
            <table className="w-full border-collapse border border-gray-300 text-gray-700 mt-4">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-4 py-3">No.</th>
                  <th className="border border-gray-300 px-4 py-3">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center">
                    Qty
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center">
                    Rate
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-right">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    desc: "Design Consultation",
                    qty: 1,
                    rate: 5000,
                    amount: 5000,
                  },
                  {
                    desc: "Blueprint Drafting",
                    qty: 2,
                    rate: 4500,
                    amount: 9000,
                  },
                  {
                    desc: "Project Supervision",
                    qty: 1,
                    rate: 6500,
                    amount: 6500,
                  },
                ].map((item, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {item.desc}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {item.qty}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      KES {item.rate.toLocaleString()}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right">
                      KES {item.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
                {/* Subtotal Row */}
                <tr className="border border-gray-300 font-semibold bg-gray-50">
                  <td
                    colSpan="4"
                    className="border border-gray-300 px-4 py-3 text-right"
                  >
                    Subtotal
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    KES {(5000 + 9000 + 6500).toLocaleString()}
                  </td>
                </tr>
                <tr className="border border-gray-300 font-semibold bg-gray-100">
                  <td
                    colSpan="4"
                    className="border border-gray-300 px-4 py-3 text-right"
                  >
                    Total
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    KES {(5000 + 9000 + 6500).toLocaleString()}
                  </td>
                </tr>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={handleDownloadFundRequest}
                    className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Download Fund Request Report
                  </button>
                </div>
              </tbody>
            </table>

            {/* Payment Details */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Payment Details</h3>
              <p className="text-gray-700">🏦 Bank Transfer</p>
              <p className="text-gray-700">
                📌 Account Name:{" "}
                <span className="font-semibold">
                  JaGedo Innovations Limited
                </span>
              </p>
              <p className="text-gray-700">🏛️ Bank: Kenya Commercial Bank</p>
              <p className="text-gray-700">🏢 Branch: Kipande House Branch</p>
              <p className="text-gray-700">
                🔢 Account No: <span className="font-semibold">1326749757</span>
              </p>
            </div>
          </div>
        )}
        {/* Payment Confirmation Section */}
        {/* Payment Confirmation Section */}
        <div className="flex gap-8 self-center pb-4 mt-8">
          {" "}
          {/* Added mt-6 for spacing */}
          <button
            type="button"
            className="border border-gray-300 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Confirm Payment
          </button>
          <button
            type="button"
            className="border border-gray-300 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Cancel Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfirmation;
