
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

  const deliveryFee = "TBD";

  const calculateTotal = (quantity, rate) => quantity * rate;

  const subtotal = products.reduce(
    (sum, item) => sum + calculateTotal(item.quantity, item.rate),
    0
  );

  // If delivery fee is numeric, add it to subtotal, else show subtotal as total
  const totalAmount =
    typeof deliveryFee === "number" ? subtotal + deliveryFee : subtotal;

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

      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-gray-600 mt-6 mb-4">
            Order Summary
          </h2>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">KES {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-medium">
                  {typeof deliveryFee === "number"
                    ? `KES ${deliveryFee.toLocaleString()}`
                    : deliveryFee}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between font-bold text-gray-800 text-base">
                <span>Total</span>
                <span>
                  {typeof deliveryFee === "number"
                    ? `KES ${totalAmount.toLocaleString()}`
                    : `KES ${subtotal.toLocaleString()}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
