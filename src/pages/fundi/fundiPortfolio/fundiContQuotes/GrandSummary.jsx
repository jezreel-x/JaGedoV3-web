"use client";

import { lazy, Suspense, useState } from "react";
import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(() =>
  import("../../../../components/Navigation/NavigationBar")
);

const Quote = () => {
  const [products] = useState([
    {
      id: 1,
      image: "/images/tile1.jpg",
      name: "Wall Tiles",
      quantity: 5,
      rate: 800,
    },
    {
      id: 2,
      image: "/images/tile2.jpg",
      name: "Floor Tiles",
      quantity: 3,
      rate: 1200,
    },
  ]);

  const [deliveryFee, setDeliveryFee] = useState(0);

  const calculateTotal = (quantity, rate) => quantity * rate;

  const subtotal = products.reduce(
    (sum, item) => sum + calculateTotal(item.quantity, item.rate),
    0
  );

  const totalAmount = subtotal + Number(deliveryFee);

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
        <div className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
            Order Summary
          </h2>

          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 space-y-6">
            {/* Milestones Table */}
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
                        Amount
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
                        Final Draft
                      </td>
                      <td
                        className="px-4 py-2 text-gray-600"
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        100
                      </td>
                      <td
                        className="px-4 py-2 text-gray-600"
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        7,600
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

            {/* Subtotal Section */}
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium">
                KES {subtotal.toLocaleString()}
              </span>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-4">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-gray-700"
                >
                  Page {page}
                </button>
              ))}
            </div>

            {/* Total Section */}
            <div className="flex justify-between font-semibold text-gray-800 text-base border-t pt-4">
              <span>Total</span>
              <span>KES {totalAmount.toLocaleString()}</span>
            </div>

            {/* Grand Total Section */}
            <div className="flex justify-between font-bold text-green-700 text-lg border-t pt-4">
              <span>Grand Total</span>
              <span>KES {totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
