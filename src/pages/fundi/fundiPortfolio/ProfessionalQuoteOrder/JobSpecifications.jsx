"use client";

import { lazy, Suspense, useState } from "react";
import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(() =>
  import("../../../../components/Navigation/NavigationBar")
);

const Quote = () => {
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [deliveryFee, setDeliveryFee] = useState(0);

  // Store subtotals for each page
  const [pageSubtotals, setPageSubtotals] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  // Handle subtotal input change
  const handleSubtotalChange = (value) => {
    setPageSubtotals((prev) => ({
      ...prev,
      [currentPage]: Number(value) || 0,
    }));
  };

  const subtotal = pageSubtotals[currentPage];
  const grandTotal =
    Object.values(pageSubtotals).reduce((sum, val) => sum + val, 0) +
    Number(deliveryFee || 0);

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <br />
      <br />
      <br />
      <br />

      <ActiveFundiNav />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
        <div className="max-w-4xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
            Order Summary - Page {currentPage}
          </h2>

          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 space-y-6">
            {/* Milestone Table */}
            <div className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all">
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
                        Amount (KES)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="px-4 py-2 text-gray-700"
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        First Draft
                      </td>
                      <td
                        className="px-4 py-2 text-gray-600"
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        50
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        <input
                          type="number"
                          value={pageSubtotals[currentPage]}
                          onChange={(e) =>
                            handleSubtotalChange(e.target.value)
                          }
                          className="w-32 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                    </tr>

                     <tr>
                      <td
                        className="px-4 py-2 text-gray-700"
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        Final Draft
                      </td>
                      <td
                        className="px-4 py-2 text-gray-600"
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        50
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        <input
                          type="number"
                          value={pageSubtotals[currentPage]}
                          onChange={(e) =>
                            handleSubtotalChange(e.target.value)
                          }
                          className="w-32 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Delivery Fee Input */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label htmlFor="deliveryFee" className="font-medium">
                Delivery Fee:
              </label>
              <input
                id="deliveryFee"
                type="number"
                value={deliveryFee}
                onChange={(e) => setDeliveryFee(e.target.value)}
                className="w-32 px-3 py-2 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
            </div>

            {/* Subtotal */}
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal (Page {currentPage})</span>
              <span className="font-medium">
                KES {subtotal.toLocaleString()}
              </span>
            </div>

            {/* Pagination with Arrows */}
            <div className="flex justify-center gap-2 mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-gray-700"
              >
                ← Prev
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "border-gray-300 hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    Page {page}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-gray-700"
              >
                Next →
              </button>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between font-bold text-green-700 text-lg border-t pt-4">
              <span>Grand Total</span>
              <span>KES {grandTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
